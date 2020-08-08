import React, { ChangeEvent, useState } from 'react'
import './TodoForm.scss'
import { Input } from '../ui/input/Input'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../actions/todoAction'
import { validateInput } from '../../utils/validation'

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent, title: string): void => {
    if (event.key === 'Enter') {
      setTitle('')
      const validation = validateInput(title)
      if (!validation.error) {
        dispatch(addTodo(title))
      } else {
        setError(validation.message)
      }
    }
  }

  const buttonClickHandler = (title: string): void => {
    setTitle('')
    const validation = validateInput(title)
    if (validation.error) {
      setError(validation.message)
    } else {
      dispatch(addTodo(title))
    }
  }

  return (
    <div className="TodoForm">
      <Input
        label="Input item value"
        className="TodoForm__item"
        value={title}
        id="title"
        onChange={inputChangeHandler}
        keyPressHandler={(event) => keyPressHandler(event, title)}
      />
      <button
        className="TodoForm__add-btn btn-floating btn-large waves-effect waves-light green"
        onClick={() => buttonClickHandler(title)}
      >
        <i className="material-icons">add</i>
      </button>
      {error && (
        <span className="TodoForm__error error-block">
          {error}{' '}
          <i className="material-icons" onClick={() => setError('')}>
            close
          </i>
        </span>
      )}
    </div>
  )
}
