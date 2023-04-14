import { useSelector, useDispatch } from 'react-redux'

import {
  getAllTodos as getAllTodosAction,
  deleteTodo as deleteTodoAction,
  updateTodo as updateTodoAction,
  createTodo as createTodoAction,
} from '@/store/actions/todo-actions'

export const useTodos = () => {
  const todos = useSelector(state => state.todos.todos ?? [])
  const loading = useSelector(state => state.todos.loading)
  const error = useSelector(state => state.todos.error)
  const dispatch = useDispatch()

  const fetchTodos = () => {
    dispatch(getAllTodosAction())
  }

  const updateTodo = (id, todo) => {
    dispatch(updateTodoAction({ id, todo }))
  }

  const deleteTodo = id => {
    return dispatch(deleteTodoAction(id))
  }

  const createTodo = newTodo => {
    dispatch(createTodoAction(newTodo))
  }
  return {
    todos,
    loading,
    error,
    fetchTodos,
    updateTodo,
    deleteTodo,
    createTodo,
  }
}
