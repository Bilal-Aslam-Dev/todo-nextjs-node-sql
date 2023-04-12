import { deleteTodoController } from '@/backend/controllers/todos/deleteTodoController'
import { updateTodoController } from '@/backend/controllers/todos/updateTodoController'

export default async (_req, _res) => {
  const { method } = _req
  switch (method) {
    case 'DELETE':
      return await deleteTodoController(_req, _res)
    case 'PATCH':
      return await updateTodoController(_req, _res)
    default:
      _res.status(500).send('Method not allowed')
  }
}
