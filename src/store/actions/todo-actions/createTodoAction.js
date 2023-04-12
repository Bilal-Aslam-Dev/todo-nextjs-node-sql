import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const createTodo = createAsyncThunk('todos/createTodo', async text => {
  try {
    const response = await API.post('/api/todos/createTodo', text)
    const createdTodo = response.data[0]
    return createdTodo
  } catch (error) {
    throw new Error(error.message)
  }
})
