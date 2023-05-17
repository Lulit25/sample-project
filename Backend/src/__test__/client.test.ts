import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { readFileSync } from 'fs';
import { join } from 'path';

const dataPath = join(__dirname, 'test-data.json');
const data = readFileSync(dataPath, 'utf8');
const jsonData = JSON.parse(data);

const mockClient = new ApolloClient({
    cache: new InMemoryCache(),
});

const mockQuery = gql`
query{
    client(id:"59761c23b30d971669fb42ff") {
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
   }`;

test('Fetch data from Apollo Client', async () => {
    mockClient.query = jest.fn().mockResolvedValue({ data: jsonData });

    const response = await mockClient.query({ query: mockQuery });

    expect(mockClient.query).toHaveBeenCalledWith({ query: mockQuery });
    expect(response.data).toEqual(jsonData);
});

test('Fetch data from Apollo Client by Id', async () => {
    const clientData = jsonData.clients[0];
    mockClient.query = jest.fn().mockResolvedValue({ data: clientData });

    const response = await mockClient.query({ query: mockQuery });

    expect(mockClient.query).toHaveBeenCalledWith({ query: mockQuery });
    expect(response.data).toEqual(clientData);
});