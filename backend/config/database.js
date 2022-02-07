require("dotenv").config();

const mysql = require("mysql");
const { promisify } = require("util");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  charset: "utf8mb4",
});

pool.getConnection(function (err, connection) {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has to many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused");
    }
  }

  if (connection) {
    console.log("DB is Connected");
    connection.release();
  }

  return;
});

pool.query = promisify(pool.query);

module.exports = pool;
