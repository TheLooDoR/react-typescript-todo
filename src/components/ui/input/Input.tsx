import React, { ChangeEvent, FunctionComponent } from 'react'

interface InputProps {
  className?: string
  type?: string
  label?: string
  id?: string
  value: string
  onChange(event: ChangeEvent<HTMLInputElement>): void
  keyPressHandler?(event: React.KeyboardEvent): void
}

export const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div className={`input-field ${props.className ? props.className : ''}`}>
      <input
        type={`${props.type ? props.type : 'text'}`}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.keyPressHandler}
      />
      {props.label && (
        <label htmlFor="title" className="active">
          {props.label}
        </label>
      )}
    </div>
  )
}
