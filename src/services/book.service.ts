import { db } from '../config/database.ts'

export async function getAllBooks() {
  const { rows } = await db.query('SELECT * FROM books');
  return rows;
}

export async function getBookById(id: string) {
  const { rows } = await db.query('SELECT * FROM books WHERE id = $1', [id]);
  return rows[0];
}
