import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});