# VRV Security

A Role-Based Access Control Dashboard for managing user roles and permissions effectively. 

This project includes:
- A **frontend** built with React.
- A **backend** built with Node.js and Express.
- **MongoDB** for data storage.
- **Tailwind** for styling.

## Features

- **Role-based access control** for users (Admin/User).
- **User registration and login** with secure password storage (bcrypt).
- **JWT-based authentication** for secure API requests.
- **Logout functionality** with token invalidation.
- **Responsive design** for better user experience.
- **Admin dashboard** for managing users.
- **Background watermark** for the homepage.


## Project Structure

vrv-security/ ├── backend/ │ ├── config/ # Database configuration │ ├── middleware/ # Authentication middleware │ ├── models/ # Mongoose schemas │ ├── routes/ # API routes │ ├── server.js # Entry point for the backend │ ├── .env # Environment variables (not included in the repository) │ └── package.json # Backend dependencies ├── frontend/ │ ├── public/ # Static assets (e.g., earth.jpeg) │ ├── src/ # React components and pages │ │ ├── components/ # Navbar, dashboards, etc. │ │ ├── pages/ # Home, Login, Register pages │ │ ├── App.js # Main React app │ │ ├── App.css # Global CSS │ └── package.json # Frontend dependencies ├── README.md # Project documentation └── .gitignore # Files and folders to ignore in Git
