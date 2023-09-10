# Social Network Backend API with Express.js and MongoDB

This is the backend API for a social network web application. Users can share their thoughts, react to their friends' thoughts, and create a friend list. It is built using Express.js for routing, a MongoDB database for data storage, and the Mongoose ODM (Object Data Modeling) library for structured interactions with the MongoDB database.

## Motivation

The primary motivation for this project was to gain a deep understanding of how to build and structure the API for a social network application while using MongoDB as the database. MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. By using the Mongoose ODM, I learned how to structure HTTP requests to interact with the MongoDB database through Express.js API routes.

## Installation

To set up and run this project on your local machine, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/k-pineda/Social_Network_API.git 
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.

   ```bash
   cd Social_Network_API
   npm install
   ```

3. **Create .env File**: Create a `.env` file in the root directory of the project and configure your MongoDB connection URI as follows:

   ```env
   MONGODB_URI='mongodb://srv/<database>'
   ```

   Replace `<database>` with your actual MongoDB database URI.

4. **Start the Server**: Start the Express.js server by running:

   ```bash
   npm start
   ```

5. **Testing the API**: You can use a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the backend functionality. Import the provided API endpoints collection and test the CRUD operations on users, thoughts, friends, and reactions.

## Usage

This project provides API routes to perform all CRUD (Create, Read, Update, Delete) HTTP requests on users, thoughts, friends, and reactions for a social network site. Users can create, read, update, and delete their thoughts, manage their friends, and react to thoughts.

For a detailed walkthrough of setting up and using this backend, please refer to the provided video walkthrough.


https://github.com/k-pineda/Social_Network_API/assets/128410226/b8adf39b-915a-42a5-8a94-8e65b39562fc



Happy coding!
