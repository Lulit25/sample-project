import { gql } from 'apollo-server';

export const typeDefs = gql`
 type Client {
    id: String!
    age: Int!
    name: String!
    gender: String!
    additionalInfo: AdditionalInfo!
  }

 type AdditionalInfo{
    company: String!
    email: String!
    phone: String!
    address: String!
  }

  type Query {
    client(id: String!) : Client
    clients : [Client]
  }
`;