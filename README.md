# 📱 Social Network API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![Status](https://img.shields.io/badge/Status-Complete-success)

---

## 📚 Table of Contents
- Description
- Technology
- Features
- Usage
- Installation
- API Routes
- Link to Github Page
- Video Demo
- References
- Author
- License

---

## 📌 Description
The Social Network API is a backend application designed to handle a social networking platform where users can share thoughts, react to friends’ thoughts, and create friend lists. This project was built using Node.js, Express, MongoDB, and Mongoose.

The application uses a NoSQL database to efficiently handle large amounts of unstructured data and demonstrates how modern social platforms manage users, relationships, and interactions.

This project highlights backend API development, database design, and working with MongoDB for scalable applications.

---

## 🛠️ Technology
- JavaScript  
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  

---

## 🚀 Features
- Create, update, and delete users  
- Add and remove friends  
- Create, update, and delete thoughts  
- Add and remove reactions to thoughts  
- NoSQL database for flexible data storage  
- RESTful API structure  

---

## 💻 Usage
Run the application in the terminal:
```bash``` 
npm start

- Use Insomnia or Postman to test API routes
- Create users and manage friend lists
- Post thoughts and add reactions
- Perform CRUD operations on all data

## 📂 Installation
`git` clone (https://github.com/Ja1993en/social-network-api.git)

Navigate into the project directory:
`cd` social-network-api

Install dependencies:
`npm` install

Create a `.env` file:
MONGODB_URI=mongodb://127.0.0.1:27017/socialDB

Start the server:
`Start` the server:

## 🔗 API Routes
Users
- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id

Friends
- POST /api/users/:userId/friends/:friendId
- DELETE /api/users/:userId/friends/:friendId

Thoughts
- GET /api/thoughts
- GET /api/thoughts/:id
- POST /api/thoughts
- PUT /api/thoughts/:id
- DELETE /api/thoughts/:id

Reactions
- POST /api/thoughts/:thoughtId/reactions
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId

## 🔗 Link to Github Page
https://github.com/Ja1993en/social-network-api

## 🎥 Video Demo
(Insomnia walkthrough recommended)

## References
