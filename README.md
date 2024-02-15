# MERN Book Search Engine

## Overview

The MERN Book Search Engine is a web application that leverages the power of GraphQL to search for books using the Google Books API. This project initially utilized a RESTful API but has been refactored to incorporate Apollo Server for GraphQL queries and mutations.

## Features

- Search for books using the Google Books API.
- Save book searches to the back end.
- Utilizes GraphQL for efficient data fetching and modification.
- User authentication for personalized interactions.

## Technologies Used

### Front End:

- React.js

### Back End:

- Node.js
- Express.js
- MongoDB (with MongoDB Atlas)

### GraphQL:

- Apollo Server

### Deployment:

- Heroku

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-book-search-engine.git

2. Install dependencies:

  
  cd mern-book-search-engine
  npm install

## Usage

1. Run the application:

  
  npm start

2. Access the application at http://localhost:3000 in your web browser.

## GraphQL API
The application now uses Apollo Server for GraphQL queries and mutations. The GraphQL endpoint is available at /graphql.

## Authentication
The authentication middleware has been modified to work seamlessly with the GraphQL API, ensuring secure and personalized user interactions.

## Deployment
Deploy your application to Heroku with a MongoDB database using MongoDB Atlas. Refer to the Deploy with Heroku and MongoDB Atlas walkthrough for detailed instructions.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.