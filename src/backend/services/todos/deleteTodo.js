import pool from '../../config/dbconfig'

export const deleteTodo = async (id, _res) => {
  try {
    const [result] = await pool.query('DELETE FROM todolist WHERE id = ?', [id])
    console.log(result.affectedRows)

    if (result.affectedRows > 0) {
      return _res.status(200).send('Todo deleted successfully.')
    } else {
      return _res.status(404).send('Todo does not exist.')
    }
  } catch (error) {
    console.log(error)
    _res.status(500).send('Could not delete a todo.')
  }
}
