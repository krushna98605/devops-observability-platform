
const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = process.env.PORT || 3000;

client.collectDefaultMetrics();

app.use(express.json());

// Count HTTP requests by method, route, and status code.
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});

// Measure HTTP request duration in seconds.
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
});

// Record metrics after each response finishes.
app.use((req, res, next) => {
  const start = process.hrtime.bigint();

  res.on("finish", () => {
    const duration =
      Number(process.hrtime.bigint() - start) / 1e9;

    const route = req.route?.path
      ? `${req.baseUrl || ""}${req.route.path}`
      : req.path;

    const labels = {
      method: req.method,
      route,
      status_code: String(res.statusCode),
    };

    httpRequestsTotal.inc(labels);
    httpRequestDuration.observe(labels, duration);
  });

  next();
});

app.get("/", (req, res) => {
  res.json({
    name: "DevOps Observability Platform",
    status: "running",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.use((err, req, res, next) => {
  console.error("Application error:", err.message);
  res.status(500).json({ error: "Internal server error" });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

module.exports = app;
