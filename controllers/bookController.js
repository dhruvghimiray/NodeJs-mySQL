import { pool } from "../config/dbConfig.js";

export const getAllBooks = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books");
  //   console.log(rows);
  res.send(rows);
};

export const getSingleBook = async (req, res) => {
  const name = req.params.name;
  const [rows] = await pool.query("SELECT * FROM books where name = ?", [name]);
  //   console.log(rows);
  res.send(rows);
};
