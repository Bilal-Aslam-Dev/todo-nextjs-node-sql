import API from '@/utils/axios'

import {
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
} from '../../action-types/todo'

export const createTodo = todo => async dispatch => {
  dispatch({ type: CREATE_TODO_REQUEST })

  try {
    const response = await API.post(todo)
    const createdTodo = response.data

    dispatch({ type: CREATE_TODO_SUCCESS, payload: createdTodo })
  } catch (error) {
    dispatch({ type: CREATE_TODO_FAILURE, payload: error.message })
  }
}
