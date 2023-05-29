import "reflect-metadata";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from "type-graphql";
import { ClientResolver } from "./resolvers";
import { sequelize } from "./database";

async function startApolloServer() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
  });

  const server = new ApolloServer({ schema });

  await sequelize.sync();

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

startApolloServer();
