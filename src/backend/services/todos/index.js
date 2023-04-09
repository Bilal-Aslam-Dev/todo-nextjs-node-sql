import pool from '@/backend/config/dbconfig'

export const getAllTodos = async _res => {
  try {
    const [rows] = await pool.query('SELECT * FROM todolist')
    return _res.status(200).send(rows)
  } catch (error) {
    _res.status(500).send('Could not get data')
  }
}
