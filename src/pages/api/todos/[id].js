import { deleteTodoController } from '@/backend/controllers/todos/deleteTodoController'
import { updateTodoController } from '@/backend/controllers/todos/updateTodoController'

export default async (_req, _res) => {
  const { method } = _req
  if (method === 'DELETE') {
    return await deleteTodoController(_req, _res)
  } else if (method === 'PATCH') {
    return await updateTodoController(_req, _res)
  } else {
    _res.status(500).send('Method not allowed')
  }
}
