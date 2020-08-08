import React, { FC } from 'react'
import './Todo.scss'
import { ITodo } from '../../actions/todoActionsType'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../actions/todoAction'

type TodoProps = {
  todo: ITodo
  toggleUpdateModal: (id: string) => void
}

declare var confirm: (message: string) => boolean

export const Todo: FC<TodoProps> = ({ todo, toggleUpdateModal }) => {
  const dispatch = useDispatch()

  const removeHandler = (event: React.MouseEvent, id: string): void => {
    event.preventDefault()
    const shouldRemove = confirm('Are you sure you want to delete an item')
    if (shouldRemove) {
      dispatch(removeTodo(id))
    }
  }
  const showModalHandler = (event: React.MouseEvent, id: string): void => {
    event.preventDefault()

    toggleUpdateModal(id)
  }

  return (
    <li className={`todo ${todo.completed ? 'todo--completed' : ''}`}>
      <label className="todo__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className="todo__title">{todo.title}</span>
        <div className="todo__buttons">
          <i
            className="material-icons orange-text todo__icon"
            onClick={(event) => showModalHandler(event, todo.id)}
          >
            edit
          </i>
          <i
            className="material-icons red-text todo__icon"
            onClick={(event) => removeHandler(event, todo.id)}
          >
            delete
          </i>
        </div>
      </label>
    </li>
  )
}
