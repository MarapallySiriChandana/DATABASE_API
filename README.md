Database Integration API

Overview

This project demonstrates Database Integration using Node.js, Express.js, and MySQL. It is a REST API that performs CRUD (Create, Read, Update, Delete) operations on user data stored in a MySQL database.

The project was built to understand how APIs interact with databases using SQL queries and how data can be stored permanently instead of using temporary arrays.

Technologies Used

* Node.js
* Express.js
* MySQL
* mysql2
* Postman

Features

Get All Users

Retrieve all users from the database.

Endpoint:

GET /users

Get User By ID

Retrieve a specific user using their ID.

Endpoint:

GET /users/:id

Add User

Add a new user to the database.

Endpoint:

POST /users

Update User

Update an existing user’s details.

Endpoint:

PUT /users/:id

Delete User

Delete a user from the database.

Endpoint:

DELETE /users/:id

Database Structure

Database

user_management

Table

users

Columns

* id (Primary Key, Auto Increment)
* name
* email
* age

Sample User Object

{
  "id": 1,
  "name": "Siri",
  "email": "siri@gmail.com",
  "age": 22
}

Concepts Learned

* SQL Basics
* Database Integration
* REST API Development
* CRUD Operations
* Express.js
* MySQL Connection
* API and Database Communication
* Postman API Testing

Installation

1. Clone the repository

git clone <repository-url>

2. Install dependencies

npm install

3. Update MySQL credentials in server.js
4. Start the server

node server.js

API Testing

All API endpoints were tested successfully using Postman.

Author

Marapally Siri Chandana
