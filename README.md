# Notes Taking App

A frontend **Notes Taking Application** built using **ReactJS, HTML, CSS, and JavaScript**.  
The app allows users to create, manage, search, and sort notes through a clean and simple user interface. It is deployed on **Vercel**.

---

## What this app does

This application allows users to:
- Add new notes
- Delete existing notes
- View all saved notes
- Search notes by title or text content
- Sort notes using different sorting modes

---

## Features

### Notes Management
- Add notes with title and content
- Delete notes when no longer needed
- Instant UI updates using React state

### Search Functionality
- Search notes by typing title or note text
- Click the search button to filter matching notes
- Displays only the notes that match the search query

### Sorting Options
The app supports **three sorting modes**:
- **Default** – original order (date added)
- **Date Added** – sort notes based on creation time
- **A–Z** – alphabetical order based on note title

### Deployment
- Deployed and live using **Vercel**

---

## Project Structure

```
notes-app/
├── build/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx              # Main app component
│   ├── Navbar.jsx           # Navigation bar
│   ├── Footer.jsx           # Footer component
│   ├── Writer.jsx           # Note input / creation logic
│   ├── Note.jsx             # Individual note component
│   ├── index.js             # React entry point
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

---

## Technologies Used

- ReactJS
- JavaScript
- HTML
- CSS
- Git & GitHub
- Vercel (deployment)

---

## Live Demo

The application is live at:  
https://notes-app-inky-zeta-28.vercel.app/

---

## How to Run Locally

Clone the repository:
```bash
git clone https://github.com/Jayantpradhan62/notes-app.git
cd notes-app
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

Open in browser:
```
http://localhost:3000
```

---

## Purpose of This Project

This project was built to:
- Practice ReactJS fundamentals
- Work with state management
- Implement search and sorting logic
- Build a real, usable frontend application
- Deploy a React app to production

It is suitable for portfolios and resume projects.

---

## Possible Future Improvements

- Save notes using localStorage or backend
- Edit existing notes
- Tag or categorize notes
- Dark mode
- Mobile UI improvements

---

## Author

Jayant Pradhan  
GitHub: https://github.com/Jayantpradhan62

---

If you find this project useful, consider starring the repository.
