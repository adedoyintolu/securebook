import { db } from '../config/database.ts'

export async function getAllServices() {
  const { rows } = await db.query('SELECT * FROM services');
  return rows;
}

export async function getServiceById(id: number) {
  const { rows } = await db.query('SELECT * FROM services WHERE id = $1', [id]);
  return rows[0];
}
