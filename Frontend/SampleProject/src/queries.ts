import { gql } from '@apollo/client';

export const getClient = gql`

query ($id: String!){
    client(id: $id) {
     id 
     age
     name
     gender
     additionalInfo{
         company
         email
         phone
         address
     }
   }
}
`;

export const getClients = gql`

query {
    clients {
     id 
     age
     name
     gender
     additionalInfo{
         company
         email
         phone
         address
     }
   }
}
`;