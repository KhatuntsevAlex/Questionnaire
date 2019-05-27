import React from 'react';
import s from './ToDoItem.module.css';
import { DragSource } from 'react-dnd';


const ToDoItem = (props) => {    
    return (
        <div className={s.todoItem}>
            {props.name}
        </div>
    )
}

export default ToDoItem
