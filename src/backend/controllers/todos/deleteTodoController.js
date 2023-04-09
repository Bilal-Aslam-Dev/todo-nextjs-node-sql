import { deleteTodo } from '@/backend/services/todos/deleteTodo'

export const deleteTodoController = async (_req, _res) => {
  const id = _req.query.id

  try {
    return await deleteTodo(id, _res)
  } catch (error) {
    _res.status(501).send('Could not delete todo')
  }
}
