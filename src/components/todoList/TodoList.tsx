import React from 'react'
import './TodoList.scss'
import { Todo } from '../todo/Todo'
import { ITodo } from '../../actions/todoActionsType'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'

type TodoListProps = {
  todos: ITodo[]
  todosLoading: boolean
  toggleUpdateModal: () => void
}
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleUpdateModal,
  todosLoading,
}) => {
  if (todos.length === 0) {
    return <p className="todo-list__empty-message center">List is empty!</p>
  }
  if (todosLoading) {
    return <Loader type="Triangle" color="#00BFFF" height={100} width={100} />
  }
  return (
    <ul className="todo-list">
      {todos.map((el) => (
        <Todo todo={el} key={el.id} toggleUpdateModal={toggleUpdateModal} />
      ))}
    </ul>
  )
}
