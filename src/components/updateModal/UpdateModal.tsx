import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import 'materialize-css'
import { Modal, Button } from 'react-materialize'
import { Input } from '../ui/input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { updateTodo } from '../../actions/todoAction'
import { validateInput } from '../../utils/validation'

type UpdateModalProps = {
  currentId: string
  isOpen: boolean
  onClose: () => void
}

export const UpdateModal: FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  currentId,
}) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const todoState = useSelector((state: RootStore) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const currentTodo = todoState.todos.find((el) => el.id === currentId)
    if (currentTodo) {
      setTitle(currentTodo.title)
    }
  }, [currentId, todoState.todos])

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const updateClickHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    const validation = validateInput(title)
    if (validation.error) {
      setError(validation.message)
    } else {
      await dispatch(updateTodo(currentId, title))
      onClose()
    }
  }

  return (
    <Modal
      actions={[
        <Button
          flat
          modal="close"
          node="button"
          waves="green"
          onClick={() => onClose()}
        >
          Close
        </Button>,
        <Button
          flat
          node="button"
          waves="green"
          onClick={(event) => updateClickHandler(event)}
        >
          Update
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Update item"
      id="update-modal"
      open={isOpen}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
      }}
    >
      <Input value={title} onChange={inputChangeHandler} />
      {error && (
        <span className="UpdateForm__error error-block">
          {error}{' '}
          <i className="material-icons" onClick={() => setError('')}>
            close
          </i>
        </span>
      )}
    </Modal>
  )
}
