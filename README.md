# Boilerplate of Node, React, and GraphQL


A few steps to set up the boilerplate. Please install packages for server and client side as below, and set up the database.


## Server
The project is run in Node.js and Express. See server code is in ./server folder.

Go to the root folder (not ./server), and `npm install` to install packages for server, including `express`, `graphql` and `apollo-server-express`.


## Client
Front end uses React.js, and in ./client folder.

Go to ./client, and `npm install` to install client packages, including `react`, `apollo-boost`, and `react-apollo`.


## Database
The boilerplate uses MongoDB. Create a new file `variables.env` in root folder, add `MONGO_URI=mongodb://localhost/boilerplate-graphql` to it. And create a database `boilerplate-graphql` (name as you want and update MONGO_URI) in your local MongoDB.
`variables.env` is in .gitignore for security reason.


## Start
Start your local MongoDB by `mongod` if using local database. Go to the project root folder, `npm run dev` to start the project, including frond end React and back end Node.


Front end: http://localhost:3000

GraphQL playground: http://localhost:4444/graphql (check the endpoint in ./server/server.js)
