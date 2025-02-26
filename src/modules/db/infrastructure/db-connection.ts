import { Sequelize } from "sequelize-typescript";
import config from "../../../shared/config/config";
import { ItemModel } from "./models/item.model";

const { host, port, username, password, database } = config.database;

const sequelize = new Sequelize({
  dialect: "postgres",
  host,
  port: Number(port),
  username,
  password,
  database,
  logging: false,
  models: [ItemModel],
});

const connectToDatabase = async () => {
  await sequelize.authenticate();
  console.log("✅ Conectado a PostgreSQL");
  await sequelize.sync();
};

export { sequelize, connectToDatabase };
