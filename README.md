# KanbanBoard

# Overview

This project is a Kanban board application where users can manage and track tasks. It allows users to sign in, manage tasks across different columns (e.g., To Do, In Progress, Done), and store data in a PostgreSQL database. The application is built using Node.js, Express, Sequelize, React, and TypeScript.

# Features
Authentication: Users can log in and create an account. JWT tokens are used for secure authentication.

Task Management: Users can create, update, and delete tasks within a Kanban board interface.

API Routes: Protected API routes that require authentication via JWT tokens.

Responsive UI: The Kanban board is designed to be responsive and user-friendly.

# Technologies Used:

# Backend:
Node.js

Express

Sequelize 

JWT (JSON Web Tokens) for Authentication

TypeScript

# Frontend:
React

TypeScript

React Router

1. Clone the Repository
Clone this repository to your local machine:

git clone ```git@github.com:usamabadarr/Kanban-Board.git```

2. Install Backend Dependencies
Navigate to the backend folder and install the necessary dependencies:

cd server
npm install

3. Configure Environment Variables
Create a .env file in the server directory with the following variables:

DB_NAME=kanban_db
DB_USER=your_database_user
DB_PASSWORD=your_database_password
JWT_SECRET_KEY=your_secret_key

4. Set Up Database
Ensure that PostgreSQL is installed and running on your machine. Create a database for the Kanban app:

psql -U your_database_user -c "CREATE DATABASE kanban_db;"

5. Install Frontend Dependencies
Navigate to the client directory and install the frontend dependencies:

cd ../client
npm install

6. Build the Client
Run the following command to build the client for production:

npm run build

7. Start the Application
Return to the server directory and start the server:

cd ../server
npm run dev
The server should now be running on http://localhost:3000.

8. Access the Kanban Board
Open your browser and navigate to http://localhost:3000 to use the Kanban board.

# Run in Development Mode

Run ```npm run start:dev```

# Acknowledgements
React - for the front-end framework.

Node.js & Express - for the back-end server.

Sequelize - for interacting with the PostgreSQL database.

JWT - for secure user authentication.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Questions
Github: usamabadarr

For additional questions, contact usamabadarr@gmail.com
