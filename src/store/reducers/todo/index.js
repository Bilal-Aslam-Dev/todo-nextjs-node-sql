import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
} from '../../action-types/todo'

// Initial state for todos
const initialState = {
  loading: false,
  todos: null,
  error: null,
}

// Reducer for handling todos state
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
    case DELETE_TODO_REQUEST:
    case CREATE_TODO_REQUEST:
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
        error: null,
      }
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        error: null,
      }
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos
          ? [...state.todos, action.payload]
          : [action.payload],
        error: null,
      }
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        error: null,
      }
    case FETCH_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
    case CREATE_TODO_FAILURE:
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default todosReducer
