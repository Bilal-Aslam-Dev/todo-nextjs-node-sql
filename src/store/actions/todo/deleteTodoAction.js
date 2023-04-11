import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async todoId => {
  try {
    await API.delete(`/api/todos/${todoId}`)
    return todoId
  } catch (error) {
    throw new Error(error.message)
  }
})
