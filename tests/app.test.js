
const request = require("supertest");
const app = require("../src/app");

describe("DevOps Observability Platform API", () => {
  test("GET / should return application details", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("DevOps Observability Platform");
    expect(response.body.status).toBe("running");
  });

  test("GET /health should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  test("GET /metrics should return Prometheus metrics", async () => {
    const response = await request(app).get("/metrics");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("process_cpu_user_seconds_total");
  });
});
