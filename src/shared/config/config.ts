const {
  DB_USERNAME,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE,
  APP_PORT,
  APP_HOST,
} = process.env;

interface AppConfig {
  port: string;
  host: string;
}

interface DatabaseConfig {
  host: string;
  username: string;
  password: string;
  port: string;
  database: string;
}

interface Config {
  app: AppConfig;
  database: DatabaseConfig;
}

const config: Config = {
  app: {
    port: APP_PORT || "3000",
    host: APP_HOST || "localhost",
  },
  database: {
    host: DB_HOST || "localhost",
    port: DB_PORT || "5432",
    database: DB_DATABASE || "mydatabase",
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD || "postgres",
  },
};

export default config;
