import { Query, Resolver, Arg } from "type-graphql";
import ClientModel from "./models/client";
import { Client } from "./schema";

@Resolver()
export class ClientResolver {
  @Query(() => Client, { nullable: true })
  async client(@Arg("id") id: string): Promise<ClientModel | null> {
    try {
      const client = await ClientModel.findByPk(id);
      return client;
    } catch (error) {
      console.error(`Error fetching client with ID ${id}:`, error);
      throw error;
    }
  }

  @Query(() => [Client])
  async clients(): Promise<ClientModel[]> {
    try {
      const clients = await ClientModel.findAll();
      return clients;
    } catch (error) {
      console.error("Error fetching clients:", error);
      throw error;
    }
  }
}

