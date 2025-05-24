# PhotoLabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view, like, and explore photos in different categories. The project includes a backend API built with Node.js and Express, and a PostgreSQL database for data persistence.

---

## Features

- Browse and view high-quality photos from various photographers.
- Filter photos by categories (People, Nature, Travel, Animals, Fashion).
- View detailed photo information in a modal overlay.
- Like/unlike photos with visual heart icon feedback
- Track liked photos with a counter in the navigation bar
- Responsive design for various screen sizes
- Real-time API integration for fresh content

---

## Tech Stack

### Frontend
- **React**: For building the user interface with functional components and hooks.
- **Context API**: For global state management of favorites.
- **Axios**: For making API requests to the backend.
- **SCSS**: For component styling with BEM methodology.

### Backend
- **Node.js**: For the server runtime.
- **Express**: For building the RESTful API.
- **PostgreSQL**: For the database.
- **Helmet & CORS**: For security and cross-origin resource sharing.

---

## Project Structure

# The project follows a component-based architecture:

* /components: Reusable UI components (PhotoList, PhotoFavButton, TopicList, etc.)
* /routes: Page-level components (HomeRoute)
* /context: React Context providers (FavoritesContext)
* /hooks: Custom React hooks (useApplicationData)
* /styles: SCSS stylesheets
* backend: API server and database

## Installation FrontEnd

Setup
Install dependencies with npm install.

Note: This project requires at least Node v16

Run The Development Server

Start the server with

```sh
npm run dev
```
You can visit the running application at http://localhost:3000

Run The Linter

You can run eslint with the following command:

```sh
npm run lint
```
Run The Jest Tests

The tests can be run with:

```sh
npm run test
# or
npm test
```

## Installation FrontEnd

Setup
Install dependencies with npm install.

Creating The DB
Use the psql -U labber command to login to the PostgreSQL server with the username labber and the password labber.

Create a database with the command CREATE DATABASE photolabs_development;.

Copy the .env.example file to .env.development and fill in the necessary PostgreSQL configuration. The node-postgres library uses these environment variables by default.

```sh
PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432
```
Seeding
Run the development server with npm start.

Both of these achieve the same result.

Make a GET request to /api/debug/reset with curl http://localhost:8001/api/debug/reset.
Use the browser to navigate to http://localhost:8001/api/debug/reset.
Run The Server
Running the server normally

```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities

```sh
npm run error
```

## Running Both Servers

To run the complete application, you'll need to start both the frontend and backend servers:

* Terminal 1: Start the backend server

```sh
cd backend
npm start
```
* Terminal 2: Start the frontend development server

```sh
cd frontend
npm run dev
```
* Visit http://localhost:3000 in your browser

## Screenshots

![Homepage](/frontend/docs/homepage.png)
![Photo Modal](/frontend/docs/single-photo.png)

## API Endpoints

Retrieve all photos

/api/photos

Retrieve all topics

/api/topics

Retrieve photos for a specific topic

/api/topics/:id/photos

Reset the database

/api/debug/reset

## Recent Updates

* Reorganized project structure with proper component separation
* Implemented photo filtering by topics
* Added favorites functionality with visual feedback
* Connected to backend API for dynamic content
* Fixed UI/UX issues for better user experience
