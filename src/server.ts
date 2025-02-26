import Hapi from "@hapi/hapi";
import { defineRoutes } from "./routes";
import config from "./shared/config/config";
import { connectToDatabase } from "./modules/db/infrastructure/db-connection";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";
import { swaggerOptions } from "./shared/swagger/swagger.config";
import { handlerError } from "./shared/errors/handler.error";

const { app } = config;

const getServer = async () => {
  const server = Hapi.server({
    host: app.host,
    port: app.port,
  });

  await connectToDatabase();

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.ext("onPreResponse", handlerError);

  defineRoutes(server);

  return server;
};

export const initializeServer = async () => {
  const server = await getServer();
  await server.initialize();
  return server;
};

export const startServer = async () => {
  const server = await getServer();
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  return server;
};
