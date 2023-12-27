# ForRequests

Hosted at [https://cloudexercise.xyz](https://cloudexercise.xyz) on a Digital Ocean Droplet (VPS) using Nginx as reverse proxy and PM2 for process manager.

ForRequests is a RequestBin like web application for testing and debugging webhooks and HTTP requests. Each webhook/HTTP request is known as an event. These events can be collected into bins which are named after their respective URL path.

## Technologies

Backend

- TypeScript
- Express
- PostgreSQL
- TypeORM

Frontend

- TypeScript
- React
- TailwindCSS
- TanStack Query

## Infrastructure

- Nginx reverse proxy handles all incoming requests
- Node Express server handles database operations and SSE connections
- React frontend interacts with Express server for bin and event data
- Postgres database captures bin information and event information (1 bin to many events)

## Features

- RESTful API for handling CRUD operations for bins and events
- SSE (Server Sent Events) to handle real time events loading without page reload using the EventSource interface
