//loading
export const REQUEST_TODOS = 'REQUEST_TODOS'
export const REQUEST_TODOS_FINISHED = 'REQUEST_TODOS_FINISHED'
//failure
export const REQUEST_TODOS_FAILED = 'REQUEST_TODOS_FAILED'
//read
export const GET_TODOS = 'GET_TODOS'
//create
export const ADD_TODO = 'ADD_TODO'
//update
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
//delete
export const DELETE_TODO = 'DELETE_TODO'

export type ITodo = {
  id: string
  title: string
  completed: boolean
}

export interface TodoLoading {
  type: typeof REQUEST_TODOS
}

export interface TodoLoaded {
  type: typeof REQUEST_TODOS_FINISHED
}

export interface TodoFailed {
  type: typeof REQUEST_TODOS_FAILED
}

export interface GetTodos {
  type: typeof GET_TODOS
  payload: ITodo[]
}

export interface AddTodo {
  type: typeof ADD_TODO
  payload: ITodo
}

export interface ToggleTodo {
  type: typeof TOGGLE_TODO
  payload: string
}

export interface UpdateTodo {
  type: typeof UPDATE_TODO
  payload: {
    id: string
    title: string
  }
}

export interface RemoveTodo {
  type: typeof DELETE_TODO
  payload: string
}

export type TodoDispatchTypes =
  | TodoLoading
  | TodoFailed
  | TodoLoaded
  | GetTodos
  | AddTodo
  | ToggleTodo
  | UpdateTodo
  | RemoveTodo
