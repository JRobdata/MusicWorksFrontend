# Musical Works Catalogue Frontend

A React frontend for managing a catalogue of musical works.

This app connects to a separate ASP.NET Core API backend and supports viewing, adding, editing, and deleting works.

## Features

- View a list of musical works
- Add new works through a form
- Edit existing works
- Delete works
- Category selection using backend category IDs
- Loading spinner while fetching data
- Basic error handling

## Tech Stack

- React
- React Router
- Tailwind CSS
- Vite
- JavaScript
- ASP.NET Core API backend

## Backend API

This frontend connects to a separate ASP.NET Core REST API.

Backend repository: [MusicWorksAPI](https://github.com/JRobdata/MusicWorksAPI)

During local development, API requests are proxied through Vite:

```txt
/api/works from http://localhost:5241/works
```

## Running Locally

### 1. Start the backend API

This frontend requires the separate ASP.NET Core API backend to be running.

In the backend API project, run:

```bash
dotnet run
```

The API should run at:

```txt
http://localhost:5241
```

### 2. Start the frontend

In this frontend project, install dependencies:

```bash
npm install
```

Then start the development server:

```bash
npm run dev
```


## Build

To create a production build:

```bash
npm run build
```

To preview the built version locally:

```bash
npm run preview
```

## Future Improvements

- Add search and filtering
- Deploy the frontend and backend
