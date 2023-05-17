export type Client = {
    id: string
    age: number
    name: string
    gender: string
    additionalInfo: additionalInfo

  };
  export type additionalInfo ={
    company: string
    email: string
    phone: string
    address: string
  }

export type Query = {
    client : Client;
    clients : Client[];
  };