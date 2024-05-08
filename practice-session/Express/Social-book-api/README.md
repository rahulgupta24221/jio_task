  ** SOCIAL BOOK API**

**Introduction**

This project is a backend REST API for a social book platform built using Node.js, Express, and MongoDB. It provides API endpoints to perform basic CRUD operations on user profiles and posts.
CRUD- Create(Post) Read(Get) Upadte(Put) Delete(delete)


**Feature:**
   
Create a new user profile
Retrieve a list of all user profiles
user can be login
Create a new book
Retrieve a list of all book
Update a book
Delete a book
Get task to particular user by Id

when you are create a task then must having userId of user . userId is given by mongodb when you are create user;

**Prerequisites**
Node.js
MongoDB



**Basic Usage**

GET /api/user/: Get a all user;

Post /api/user/signup_user:crate a new user

Post /api/user/login:login the user


GET /api/book/: Get a list of all books.

POST /api/book/addtask: Create a new books.

PUT /api/book/update/:id: Update a book by ID.

DELETE /api/book/delete/:id: Delete a book by ID.

GET  /api/book/user/:id  : Get task by userID

 



