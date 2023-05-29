# BLEN Sample Project

This is a project forked form blencorp/sample-project.
It is an Application built using Node js, react and GraphQL

## Getting Started

To run this project

- Clone the repo
- Build the application as per the [Instructions](#instructions) below.

## [Instructions](#instructions)

To run Backend Application:

```shell
git clone https://github.com/Lulit25/sample-project.git
cd Backend
npm install
npm start

insert sample data to database table(query in migration file)

Runs on http://localhost:4000/



To run test for backend

npm test
```

To run frontend application:

```shell
cd Frontend
npm install
vite dev

Navigate to the url provided
```
### [Backend](#backend)

  - Node js application using GraphQl Apollo server
  - Uses Typescript
  - Uses mysql database to store data
  - Uses sequelize and TypeGraphQL
  - Unit test included using jest
  - Database migration for database models

### [Frontend](#frontend)

  - React application created using vite
  - Uses Typescript
  - Fetch data from backened using Apollo client
  - Displays list of clients in a table and client detail when Name of client clicked
  - Used Redux to manage state
  - User Tailwind css for styling



