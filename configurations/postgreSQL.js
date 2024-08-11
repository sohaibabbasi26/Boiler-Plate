const { DataSource } = require("typeorm");
const path = require("path");
const dotenv = require("dotenv");


const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,  
  entities: [path.join(__dirname, "../src/entities/**/*.js")],
});

module.exports = dataSource;
