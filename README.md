# My Website

Welcome to my personal website portfolio! Here, you can find information about my projects, skills, and ways to connect with me. The website is built using React and Tailwind CSS.

## Run with Docker Compose

Start the Vite development server in a Node.js container:

```sh
docker compose up
```

Open [http://localhost:5173](http://localhost:5173). Compose installs dependencies in the container on startup and stores `node_modules` in a Docker-managed volume, so it does not install packages on your host. Stop the server with `Ctrl+C` (or `docker compose down`).

To run other npm commands in the container, for example a production build:

```sh
docker compose run --rm app npm run build
```