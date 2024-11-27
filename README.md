# VRV Security

A Role-Based Access Control Dashboard for managing user roles and permissions effectively. 

![img](/readmeimg/homepage.png)

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


## Technologies Used

### Frontend
- React
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Other
- JWT for authentication
- bcrypt.js for password hashing
- Git for version control


## Setup Instructions

### Prerequisites
1. Install **Node.js** and **npm**.
   - [Download Node.js](https://nodejs.org/)
2. Install **MongoDB** or use a cloud database like **MongoDB Atlas**.
   - [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2.Install dependencies:
  ```bash
   npm install

   ```
3.Create a .env file with the following contents:
 ```bash
   MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


   ```
4.Start the server:
```bash
  npm start
```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
     cd frontend
   ```

2.Install dependencies:
```bash
     npm install

   ```
3.Start the frontend development server:
```bash
     npm start

   ```

## Role Descriptions

### Root Admin
The Root Admin is the highest authority in the system and has complete control over all functionalities. This role is unique and usually assigned to a specific individual (e.g., the superuser).

#### Powers and Privileges:
- Can manage all users, including Admins.
- Cannot be deleted or modified by any other role, including other Admins.
- Can create new Admin accounts.
- Has unrestricted access to all system functionalities.
- Typically used to initialize and maintain the system at the highest level.

---

### Admin
The Admin role is a secondary level of authority, responsible for managing general operations and overseeing users.

#### Powers and Privileges:
- Can create, edit, or delete User accounts.
- Can assign or update roles for users (except for Root Admin).
- Cannot delete or modify the Root Admin account.
- Can view all user information, excluding sensitive details like passwords.
- Ideal for handling day-to-day operations.

---

### User
The User role is the most basic level of access, designed for general end-users of the system.

#### Powers and Privileges:
- Can register and log in to the system.
- Has access to personalized content based on their role.
- Cannot manage other users or access administrative settings.
- Intended for interacting with the system as per the assigned permissions.



