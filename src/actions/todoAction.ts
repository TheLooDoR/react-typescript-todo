import { Dispatch } from 'redux'
import Axios from 'axios'
import {
  ADD_TODO,
  AddTodo,
  DELETE_TODO,
  GET_TODOS,
  GetTodos,
  ITodo,
  RemoveTodo,
  REQUEST_TODOS,
  REQUEST_TODOS_FAILED,
  REQUEST_TODOS_FINISHED,
  TodoDispatchTypes,
  TodoFailed,
  TodoLoaded,
  TodoLoading,
  TOGGLE_TODO,
  ToggleTodo,
  UPDATE_TODO,
  UpdateTodo,
} from './todoActionsType'

const todoLoadingAction = (): TodoLoading => {
  return {
    type: REQUEST_TODOS,
  }
}

const todoErrorAction = (): TodoFailed => {
  return {
    type: REQUEST_TODOS_FAILED,
  }
}

const getTodosAction = (todos: ITodo[]): GetTodos => {
  return {
    type: GET_TODOS,
    payload: todos,
  }
}

const todoLoadedAction = (): TodoLoaded => {
  return {
    type: REQUEST_TODOS_FINISHED,
  }
}

const addTodoAction = (todo: ITodo): AddTodo => {
  return {
    type: ADD_TODO,
    payload: todo,
  }
}

const todoToggleAction = (id: string): ToggleTodo => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  }
}

const updateTodoAction = (id: string, title: string): UpdateTodo => {
  return {
    type: UPDATE_TODO,
    payload: { id, title },
  }
}

const removeTodoAction = (id: string): RemoveTodo => {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

export const getTodos = () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
  try {
    dispatch(todoLoadingAction())
    const res = await Axios.get(
      'https://react-todo-app-c3f84.firebaseio.com/todos.json'
    )
    //insert id key into object
    const todos: ITodo[] = Object.keys(res.data).map((key) => ({
      ...res.data[key],
      id: key,
    }))
    dispatch(getTodosAction(todos))
    dispatch(todoLoadedAction())
  } catch (e) {
    dispatch(todoErrorAction())
  }
}

export const addTodo = (title: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    const res = await Axios.post(
      'https://react-todo-app-c3f84.firebaseio.com/todos.json',
      { title, completed: false }
    )
    dispatch(addTodoAction({ id: res.data.name, title, completed: false }))
  } catch (e) {
    console.error(e)
  }
}

export const toggleTodo = (id: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    dispatch(todoToggleAction(id))
    const todo = await Axios.get(
      `https://react-todo-app-c3f84.firebaseio.com/todos/${id}.json`
    )
    await Axios.patch(
      `https://react-todo-app-c3f84.firebaseio.com/todos/${id}.json`,
      { completed: !todo.data.completed }
    )
  } catch (e) {
    console.error(e)
  }
}

export const updateTodo = (id: string, title: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    await Axios.patch(
      `https://react-todo-app-c3f84.firebaseio.com/todos/${id}.json`,
      { title }
    )
    dispatch(updateTodoAction(id, title))
  } catch (e) {}
}

export const removeTodo = (id: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    dispatch(todoLoadingAction())
    await Axios.delete(
      `https://react-todo-app-c3f84.firebaseio.com/todos/${id}.json`
    )
    dispatch(todoLoadedAction())
    dispatch(removeTodoAction(id))
  } catch (e) {
    console.error(e)
  }
}
