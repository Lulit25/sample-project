 import { Model, DataTypes } from "sequelize";
 import { sequelize } from "../database";


class AdditionalInfo extends Model{
    company!: string;
    email!: string;
    phone!: string;
    address!: string;
  }

class ClientModel extends Model {
    public id!: string;
    public age!: number;
    public name!: string;
    public gender!: string;
    public additionalInfo!: AdditionalInfo  }

    ClientModel.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      additionalInfo: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      tableName: "clients",
    }
  );

  export default ClientModel;

