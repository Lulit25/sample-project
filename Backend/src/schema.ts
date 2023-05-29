import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AdditionalInfo {
  @Field()
  company!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  address!: string;
}

@ObjectType()
export class Client {
  @Field()
  id!: string;

  @Field()
  age!: number;

  @Field()
  name!: string;

  @Field()
  gender!: string;

  @Field(() => AdditionalInfo)
  additionalInfo!: AdditionalInfo;
  

}