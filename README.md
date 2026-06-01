# React Projects Showcase

A portfolio-ready React project that showcases my completed front-end projects with search, filters, saved projects, API demo and dynamic project detail pages.

## Live Demo

[View Live Website](https://sonkata.github.io/react-projects-showcase/)

## About the Project

React Projects Showcase is a front-end portfolio-style project built with React, Vite and React Router.

The project displays my completed HTML, CSS, JavaScript and React projects in a clean card layout. It includes real front-end functionality such as category filters, search, saved projects with localStorage, API data fetching, contact form validation and dynamic project detail pages.

The main goal of this project was to practice more realistic React patterns and create a project that looks closer to something portfolio-ready.

## Features

- Hero section
- Project cards
- Project data file
- Category filters
- Search input
- Clear search button
- Results count
- Empty state when no projects are found
- Save / Saved project button
- Saved projects filter
- Saved projects count
- Clear saved projects button
- localStorage persistence
- React Router pages
- Dynamic project detail pages
- API demo page
- API loading state
- API error state
- API reload button
- API search
- Contact form
- Form validation
- Success message
- Responsive design
- GitHub Pages deployment

## Technologies Used

- React
- Vite
- React Router
- JavaScript
- CSS
- Fetch API
- localStorage
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── ScrollToTop.jsx
│   ├── Hero.jsx
│   ├── SearchBox.jsx
│   ├── FilterButtons.jsx
│   ├── ProjectList.jsx
│   ├── ProjectCard.jsx
│   ├── ApiSearchBox.jsx
│   └── ApiPostCard.jsx
├── data/
│   └── projects.js
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetails.jsx
│   ├── ApiDemo.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css