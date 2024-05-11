import { pool } from "../config/dbConfig.js";

export const getAllBooks = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM books");
  //   console.log(rows);
  res.send(rows);
};

export async function getSingleBook(id) {
  const [rows] = await pool.query("SELECT * FROM books where id = ?", [id]);
  //   console.log(rows);
  return rows;
}
