# Photolabs API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U labber` command to login to the PostgreSQL server with the username `labber` and the password `labber`.

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
```

## Seeding

Run the development server with `npm start`.

Both of these achieve the same result.

- Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`.
- Use the browser to navigate to [http://localhost:8001/api/debug/reset](http://localhost:8001/api/debug/reset).

## Run The Server

cd backend
npm install
cp .env.example .env.development
# Edit .env.development with your DB credentials if needed
# Create and seed the database as per README instructions
npm start

## Endpoints

### Retrieve all photos

[/api/photos](http://localhost:8001/api/photos)

### Retrieve all topics

[/api/topics](http://localhost:8001/api/topics)

### Retrieve photos for a specific topic

[/api/topics/:id/photos](http://localhost:8001/api/topics/:id/photos)

### Reset the database

[/api/debug/reset](http://localhost:8001/api/debug/reset)
