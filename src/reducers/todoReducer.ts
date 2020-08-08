import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  ITodo,
  REQUEST_TODOS,
  REQUEST_TODOS_FAILED,
  REQUEST_TODOS_FINISHED,
  TodoDispatchTypes,
  TOGGLE_TODO,
  UPDATE_TODO,
} from '../actions/todoActionsType'

interface ITodoState {
  loading: boolean
  todos: ITodo[]
}

const initialState: ITodoState = {
  loading: false,
  todos: [],
}

export const todoReducer = (
  state: ITodoState = initialState,
  action: TodoDispatchTypes
): ITodoState => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        loading: true,
      }
    case REQUEST_TODOS_FINISHED:
      return {
        ...state,
        loading: false,
      }
    case REQUEST_TODOS_FAILED:
      return {
        ...state,
        loading: false,
      }
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...(state.todos as Array<ITodo>), action.payload],
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload) {
            el.completed = !el.completed
          }
          return el
        }),
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) {
            el.title = action.payload.title
          }
          return el
        }),
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      }
    default:
      return state
  }
}
