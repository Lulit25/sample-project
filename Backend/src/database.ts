import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blen", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});