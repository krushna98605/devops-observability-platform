# DevOps Observability Platform

A containerized Node.js application monitoring platform built using Docker, Docker Compose, Prometheus, and Grafana. It collects application metrics, visualizes performance, and sends email alerts for high API response latency.

## Project Overview

This project demonstrates application monitoring, containerization, automated testing, and CI/CD automation using common DevOps tools.

## Architecture

- **Node.js and Express:** Application API and metrics endpoint.
- **Docker:** Containerizes the application.
- **Docker Compose:** Runs the application and monitoring services.
- **Prometheus:** Collects and stores application metrics.
- **Grafana:** Visualizes metrics through dashboards and provides alerting.
- **GitHub Actions:** Automates testing and Docker image publishing.

## Features

- Application health-check endpoint.
- Prometheus metrics exposed at `/metrics`.
- HTTP request counter and response-time histogram.
- CPU, memory, and Node.js heap monitoring.
- Grafana dashboard with request-rate and latency panels.
- Email notifications for high API response latency.
- Automated application tests using Jest and Supertest.
- Automated CI/CD workflow with GitHub Actions.
- Docker image published to Docker Hub.
- Environment-variable-based configuration for credentials.

## Technology Stack

- Node.js and Express.js
- Docker and Docker Compose
- Prometheus and PromQL
- Grafana
- Git and GitHub
- GitHub Actions
- Jest and Supertest

## Project Structure

```text
devops-observability-platform/
├── .github/
│   └── workflows/
│       └── ci.yml
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

## Getting Started

### Prerequisites

Install Docker Desktop with Docker Compose, Git, and Node.js if you want to run tests locally.

### 1. Clone the repository

```bash
git clone https://github.com/krushna98605/devops-observability-platform.git
cd devops-observability-platform
```

### 2. Configure environment variables

Set these variables in your terminal before starting the services:

- `GF_SECURITY_ADMIN_PASSWORD`: a strong Grafana administrator password.
- `GF_SMTP_PASSWORD`: your Brevo SMTP key.

Never commit real passwords, API keys, or `.env` files to GitHub.

### 3. Start the platform

```bash
docker compose up -d --build
```

### 4. Access the services

| Service | URL |
|---|---|
| Node.js application | http://localhost:3000 |
| Application health | http://localhost:3000/health |
| Prometheus metrics | http://localhost:3000/metrics |
| Prometheus UI | http://localhost:9090 |
| Grafana | http://localhost:3001 |

Sign in to Grafana using the configured administrator credentials. The Prometheus data source should use `http://prometheus:9090` when configured inside the Docker Compose network.

## Monitoring and Alerting

The application exposes these custom Prometheus metrics:

- `http_requests_total`: HTTP request count by method, route, and status code.
- `http_request_duration_seconds`: HTTP response-time histogram.

The Grafana dashboard includes application memory usage, CPU usage, Node.js heap usage, HTTP requests per second, average response time, and p95 response latency.

A Grafana alert rule monitors elevated p95 API response latency and can send email notifications.

## CI/CD Pipeline

The GitHub Actions workflow runs automated tests and builds and publishes the Docker image to Docker Hub when changes are pushed to the configured branch.

Docker Hub image:

`krushnadevops9860/devops-observability-platform:latest`

## Useful Commands

```bash
# Start services
docker compose up -d

# Check running services
docker compose ps

# View logs
docker compose logs -f

# Stop this project's services
docker compose down

# Run tests locally
npm ci
npm test
```

**Note:** `docker compose down` stops and removes this project's Compose containers and network. Use it only when you intend to stop the platform.

## Learning Outcomes

- Containerization and multi-container orchestration.
- Application instrumentation and metrics collection.
- Prometheus scraping and PromQL queries.
- Grafana dashboards and alert notifications.
- Automated testing and CI/CD with GitHub Actions.
- Docker image publishing.
- Environment-variable-based secret configuration.

## Future Improvements

- Deploy the platform to a cloud environment.
- Add centralized logging and additional alert rules.
- Add more integration and performance tests.

## Author

**Krushna Maswadkar**
Aspiring DevOps Engineer

GitHub: https://github.com/krushna98605
