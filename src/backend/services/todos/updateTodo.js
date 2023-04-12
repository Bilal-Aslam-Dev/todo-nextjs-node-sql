import pool from '../../config/dbconfig'

export const updateTodo = async (_req, _res) => {
  try {
    const { id } = _req.query
    const { text, status } = _req.body
    const [insert] = await pool.query(
      'UPDATE todolist SET text = ?, status = ? WHERE id = ?',
      [text, status, id]
    )
    if (insert.affectedRows > 0) {
      const [result] = await pool.query('SELECT * FROM todolist WHERE id = ?', [
        id,
      ])
      return _res.status(200).send(result[0])
    } else {
      return _res.status(404).send('Todo does not exist.')
    }
  } catch (error) {
    _res.status(500).send('Could not update todo.')
  }
}
