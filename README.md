
# GraphQL Project

This is a simple GraphQL project using Apollo Server and Explorer. The server is run using Nodemon.

## Table of Contents

- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd graphql-apollo-server
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed. Then run the following command to install all required dependencies:
   ```bash
   npm install
   ```

   This will install:
   - Apollo Server: `@apollo/server`
   - GraphQL: `graphql`

## Running the Server

1. **Start the server**:
   To start the server with Nodemon, run the following command:
   ```bash
   nodemon index.js
   ```

   This will automatically restart the server whenever you make changes to the source files.

2. **Access GraphQL Explorer**:
   After starting the server, open your browser and go to:
   ```
   http://localhost:4000/graphql
   ```
   Here, you can interact with the GraphQL API using the Apollo Explorer.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Apollo Server**: A community-driven, open-source GraphQL server.
- **GraphQL**: A query language for APIs.
- **Nodemon**: A tool that helps develop node.js-based applications by automatically restarting the node application when file changes are detected.

## Project Structure

```
graphql-apollo-server/
├── _db.js
├── index.js
├── package-lock.json
├── package.json
└── README.md
└── schema.js
```

- `index.js`: The main entry point for the server.
- `package.json`: Contains metadata about the project and its dependencies.
- `package-lock.json`: Records the exact versions of packages installed.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

