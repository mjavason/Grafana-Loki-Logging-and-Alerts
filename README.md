# Grafana Loki Logging with a TypeScript Express API

This project demonstrates how to integrate Grafana Loki for logging in a TypeScript Express application. It includes a sample Express server with a few endpoints, and all logs are sent to a Grafana Loki instance.

## Features

- **Express Server**: A simple Express server with a few API endpoints.
- **TypeScript**: The entire codebase is written in TypeScript.
- **Winston Logging**: Uses Winston for logging, with a custom transport for Grafana Loki.
- **Grafana Loki Integration**: Sends logs to a Grafana Loki instance for easy viewing and analysis.
- **Swagger API Documentation**: Includes Swagger for API documentation.
- **Docker Compose for Grafana/Loki**: Includes a `docker-compose.yml` in the `promtail` directory to easily set up Grafana and Loki.

## Prerequisites

- **Node.js and npm (or yarn)**: You can download them from the [official Node.js website](https://nodejs.org).
- **Docker and Docker Compose**: You can download them from the [official Docker website](https://www.docker.com/products/docker-desktop).

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```
    PORT=5000
    ```

4.  **Start Grafana and Loki:**

    Navigate to the `promtail` directory and run the following command:

    ```bash
    docker-compose up -d
    ```

    This will start Grafana and Loki in the background. You can access Grafana at `http://localhost:3000`.

5.  **Start the application:**

    You can start the application in development mode (with hot reloading) or production mode.

    -   **Development:**

        ```bash
        npm run dev
        ```

    -   **Production:**

        ```bash
        npm run build
        npm run start
        ```

    The application will be running at `http://localhost:5000`.

## How It Works

The application uses the `winston-loki` package to send logs to the Loki instance. The logger is configured in `logger.config.ts` to send logs to `http://localhost:3100`, which is the default address for Loki.

The Express server has a few endpoints that generate logs. For example, the `GET /` endpoint logs an informational message and an error message. You can view these logs in Grafana by going to the "Explore" tab and selecting the "Loki" data source.

## API Documentation

The API documentation is generated using Swagger. You can access it at `http://localhost:5000/docs`.

## Scripts

-   `npm run dev`: Starts the application in development mode with hot reloading.
-   `npm run build`: Compiles the TypeScript code to JavaScript.
-   `npm run start`: Starts the application in production mode.
-   `npm run test`: Runs the tests using Jest.
