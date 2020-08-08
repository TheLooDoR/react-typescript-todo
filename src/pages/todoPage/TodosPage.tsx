import React, { useState, useEffect } from 'react'
import { TodoForm } from '../../components/todoForm/TodoForm'
import { TodoList } from '../../components/todoList/TodoList'
import { UpdateModal } from '../../components/updateModal/UpdateModal'
import './TodoPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../../store'
import { getTodos } from '../../actions/todoAction'

export const TodosPage: React.FC = () => {
  const todoState = useSelector((state: RootStore) => state.todos)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [currentTodoId, setCurrentTodoId] = useState<string>('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  const toggleUpdateModal = (id?: string): void => {
    setOpenModal((prevState) => !prevState)
    if (id) {
      setCurrentTodoId(id)
    }
  }

  return (
    <div className="todo-page">
      <TodoForm />

      <TodoList
        todos={todoState.todos}
        toggleUpdateModal={toggleUpdateModal}
        todosLoading={todoState.loading}
      />
      <UpdateModal
        isOpen={openModal}
        onClose={toggleUpdateModal}
        currentId={currentTodoId}
      />
    </div>
  )
}
