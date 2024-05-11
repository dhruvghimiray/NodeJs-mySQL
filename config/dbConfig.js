import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config()

export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_user,
    password: process.env.MYSQL_password,
    database: process.env.MYSQL_database,
  })
  .promise();


