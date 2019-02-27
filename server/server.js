const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config({ path: 'variables.env' });

// Construct a schema, using GraphQL schema language
const typeDefs = require('./typedefs');

// Provide resolver functions for your schema fields
const resolvers = require('./resolvers');

// GraphQL: Schema
const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: `http://localhost:4444/graphql`,
        settings: {
            'editor.theme': 'light'
        }
    }
});

// Connects to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err));

// Initializes application
const app = express();

SERVER.applyMiddleware({
    app
});

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
