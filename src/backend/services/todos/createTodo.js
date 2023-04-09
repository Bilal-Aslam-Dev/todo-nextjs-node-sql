import pool from '../../config/dbconfig'

export const createTodo = async (todo, _res) => {
  try {
    if (!todo) return _res.status(403).send('Did not receive a todo')
    await pool.query(
      `INSERT INTO todolist (text, status, date) VALUES (?, ?, ?)`,
      [todo.text, todo.status || 0, todo.date || new Date()]
    )
    return _res.status(200).send('Todo successfully created')
  } catch (error) {
    _res.status(500).send('Could not create a todo.')
  }
}
