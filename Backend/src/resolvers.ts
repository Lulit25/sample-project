import { readFileSync } from 'fs';
import { join } from 'path';
import { Client } from './types';

const dataPath = join(__dirname, 'data.json');
const data = readFileSync(dataPath, 'utf8');
const jsonData = JSON.parse(data);

export const resolvers = {
    Query: {
        client: (_: any, { id }: { id: string }): Client | undefined => {
            return jsonData.clients.find((client:Client) => client.id === id);
          },
      clients: () => {
       
        return jsonData.clients;
      },
    },
  };

