require("dotenv").config();
const dbPassword = process.env.DB_PASSWORD || null;

module.exports = {
  HOST: "localhost", // Or the IP address of your MySQL server
  USER: "root",
  PASSWORD: "@Disneyxa123",
  DB: "AgroSystem",
  dialect: "mysql",
};
