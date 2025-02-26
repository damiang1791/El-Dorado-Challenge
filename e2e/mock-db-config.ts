/*
jest.mock("../src/modules/db/infrastructure/models/item.model", () => ({
  ItemModel: {
    create: jest
      .fn()
      .mockResolvedValue({ id: "mock-id", name: "Item 1", price: 10 }),
    findAll: jest.fn().mockResolvedValue([]),
  },
}));
*/
import { Sequelize } from "sequelize-typescript";
import { ItemModel } from "../src/modules/db/infrastructure/models/item.model";

const sequelizeMock = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
  models: [ItemModel],
});

const connectToDatabaseMock = async () => {
  await sequelizeMock.authenticate();
  console.log("✅ Conectado a SQLite en memoria para tests");
  await sequelizeMock.sync({ force: true });
};

jest.mock("../src/modules/db/infrastructure/db-connection", () => ({
  connectToDatabase: connectToDatabaseMock,
  sequelize: sequelizeMock,
}));
