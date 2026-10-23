\# DevOps Observability Platform



A containerized Node.js application monitoring platform built using Docker, Docker Compose, Prometheus, and Grafana. It collects application metrics, visualizes performance, and supports email alerts for high API response latency.



\## Project Overview



This project demonstrates how DevOps engineers can monitor application health and performance using open-source observability tools.



\### Architecture



\- \*\*Node.js + Express:\*\* Application API and metrics endpoint.

\- \*\*Docker:\*\* Containerizes the application.

\- \*\*Docker Compose:\*\* Runs and manages the application and monitoring services.

\- \*\*Prometheus:\*\* Collects and stores application metrics.

\- \*\*Grafana:\*\* Visualizes metrics through dashboards and provides alerting.



\## Features



\- Application health-check endpoint.

\- Prometheus metrics exposed at `/metrics`.

\- HTTP request counter and response-time histogram.

\- CPU, memory, and Node.js heap monitoring.

\- Grafana dashboard with request-rate and latency panels.

\- Email notifications for high API response latency.

\- Automated application tests.

\- Environment-variable-based configuration for credentials.



\## Technology Stack



\- Node.js

\- Express.js

\- Docker and Docker Compose

\- Prometheus

\- Grafana

\- PromQL

\- Git and GitHub

\- Jest and Supertest



\## Project Structure



```text

devops-observability-platform/

├── src/

│   └── app.js

├── tests/

│   └── app.test.js

├── monitoring/

│   └── prometheus.yml

├── Dockerfile

├── docker-compose.yml

├── package.json

├── package-lock.json

└── .gitignore

```



\## Getting Started



\### Prerequisites



Install Docker Desktop with the Docker Compose plugin and Git.



\### 1. Clone the repository



```bash

git clone https://github.com/krushna98605/devops-observability-platform.git

cd devops-observability-platform

```



\### 2. Configure environment variables



Set these variables in your terminal before starting the services:



\- `GF\_SECURITY\_ADMIN\_PASSWORD` — a strong Grafana administrator password.

\- `GF\_SMTP\_PASSWORD` — your Brevo SMTP key.



Never commit real passwords, API keys, or `.env` files to GitHub.



\### 3. Start the platform



```bash

docker compose up -d --build

```



\### 4. Access the services



| Service | URL |

|---|---|

| Node.js application | http://localhost:3000 |

| Application health | http://localhost:3000/health |

| Prometheus metrics | http://localhost:3000/metrics |

| Prometheus UI | http://localhost:9090 |

| Grafana dashboard | http://localhost:3001 |



Sign in to Grafana using the configured administrator credentials. Configure Prometheus as a data source with the URL `http://prometheus:9090`.



\## Monitoring and Alerting



The application exposes custom Prometheus metrics:



\- `http\_requests\_total` — HTTP request count by method, route, and status code.

\- `http\_request\_duration\_seconds` — HTTP response-time histogram.



The Grafana dashboard includes application memory usage, CPU usage, Node.js heap usage, HTTP requests per second, average response time, and p95 response latency.



The platform also supports an email alert for elevated p95 API response latency.



\## Useful Commands



```bash

\# Start services

docker compose up -d



\# Check running services

docker compose ps



\# View logs

docker compose logs -f



\# Stop this project's services

docker compose down



\# Run tests locally

npm test

```



\## Learning Outcomes



\- Containerization and multi-container orchestration.

\- Application instrumentation and metrics collection.

\- Prometheus scraping and PromQL queries.

\- Grafana dashboards and alert notifications.

\- Environment-variable-based secret configuration.

\- Git version control and GitHub collaboration.



\## Future Improvements



\- GitHub Actions CI pipeline for automated testing.

\- Automated Docker image builds and publishing.

\- Deployment to a cloud platform.

\- Centralized logging and additional alert rules.



\## Author



\*\*Krushna Maswadkar\*\*



Aspiring DevOps Engineer



GitHub: https://github.com/krushna98605



