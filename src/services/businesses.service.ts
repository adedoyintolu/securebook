import { db } from '../config/database.ts'

export async function getAllBusinesses() {
  const { rows } = await db.query('SELECT * FROM businesses');
  return rows;
}

export async function getBusinessById(id: number) {
  const { rows } = await db.query('SELECT * FROM businesses WHERE id = $1', [id]);
  return rows[0];
}
