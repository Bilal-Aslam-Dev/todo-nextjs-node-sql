import pool from '../../config/dbconfig'

export const createTodo = async (todo, _res) => {
  console.log(todo)
  try {
    if (!todo) return _res.status(403).send('Did not receive a todo')

    const insert = await pool.query(
      `INSERT INTO todolist (text, status, date) VALUES (?, ?, ?) `,
      [todo.text, todo.status || 0, todo.date || new Date()]
    )
    if (insert[0].affectedRows > 0) {
      const result = await pool.query(
        `SELECT * FROM todolist WHERE text = ? ORDER BY id DESC LIMIT 1`,
        [todo.text]
      )
      const newTodo = result[0]
      return _res.status(200).send(newTodo)
    } else {
      _res.status(500).send('Could not create a todo.')
    }
  } catch (error) {
    _res.status(500).send('Could not create a todo.')
  }
}
