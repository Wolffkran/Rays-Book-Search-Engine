const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const typeDefs = require('./schemas/typeDefs'); 
const resolvers = require('./schemas/resolvers'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }), // context with the request for authentication
});

// Apply the Apollo Server middleware to the Express app
server.start().then(() => {
  server.applyMiddleware({ app, cors: false });
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`🚀 GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
