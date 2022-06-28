// CONECTANDO A API COM O BANCO DE DADOS
import { Client } from "pg";

const database = new Client({
  user: "rikhard",
  host: "localhost",
  database: "db_users",
  password: "1234",
  port: 5432,
});

export const startDatabase = async () => {
  await database.connect();
};

export default database;
