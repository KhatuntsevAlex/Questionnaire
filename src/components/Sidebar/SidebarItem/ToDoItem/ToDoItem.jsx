import React from 'react'
import s from './ToDoItem.module.css'

const ToDoItem = ({ id, name }) => (
  <div id={id} className={s.todoItem}>
    {name}
  </div>
)

export default ToDoItem


