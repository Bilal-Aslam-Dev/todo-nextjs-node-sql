import { createAsyncThunk } from '@reduxjs/toolkit'

import API from '@/utils/axios'

export const getAllTodos = createAsyncThunk(
  'todos/getAllTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/api/todos')
      const todos = response.data
      return todos
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)
