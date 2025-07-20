# NestJS Template

A boilerplate for building RESTful APIs with NestJS, PostgreSQL, and Docker. This template is designed to help developers quickly set up a new project with best practices and essential features.

---

## Table of Contents

#### Setup

1. [Tech Stack](#tech-stack)
2. [Prerequisites](#prerequisites)
3. [Environment Setup](#environment-setup)
4. [Running the Application](#running-the-application)
5. [Docker Setup](#docker-setup)
6. [Compile and run the project](#compile-and-run-the-project)
7. [Testing](#testing)

---
# Setup

## Tech Stack

**Runtime & Framework:** Node.js, NestJS, TypeScript
**Database:** PostgreSQL
**Containerization:** Docker, Docker Compose
**Testing:** Jest (unit), Supertest (integration)


## Prerequisites

**Docker** & **Docker Compose**
**Node.js** v20 or higher [Suggested version is v22]
**nvm**
**npm**


## Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
   ```
Update `.env` with your configuration (DB credentials, ports, JWT secrets, etc.).


## Running the Application

### Docker Setup

Build and launch services in one command:

```bash
docker-compose up --build -d
```

To stop:

```bash
docker-compose down
```

### [Optional] Install and use Node using nvm

Switch the active Node.js version in `.nvmrc`:

```bash
nvm use
```
Install Node:

```bash
nvm install
```


### Compile and run the project

Install dependencies:

```bash
npm install
```
Start in development mode:

```bash
npm run dev
```

#### Production Mode

```bash
npm run build
npm run start
```

---

## Testing

**Unit Tests**

```bash
npm run test:unit
```
**Integration Tests**

```bash
npm run test:integration
```
**All Tests**

```bash
npm run test:all
```
