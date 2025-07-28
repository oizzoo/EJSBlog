# EJSBlog

A simple blog written in Node.js using Express.js and EJS as the templating engine. It allows you to create, view, edit, and delete posts. The project does not use a database — data is stored only during the session runtime.

## Requirements

- Node.js (recommended LTS version)
- npm (Node.js package manager, included with Node.js)

## Installation

1. Clone the repository to your computer:


2. Install the necessary dependencies:


## Running the application

After installing dependencies, start the server with:


By default, the app will be available at: `http://localhost:3000`

## Usage

- Create new posts, edit existing ones, or delete them.
- Data is stored only during the app runtime (in the session), so it will be lost after restarting the server.

## Project structure

- `app.js` — main file with Express server configuration
- `views/` — EJS templates
- `public/` — static CSS files and other assets

## Notes

- The project does not use a database.
- Intended for learning purposes and simple demos.

---

