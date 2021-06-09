import React from 'react'
import s from './Sidebar.module.css'
import NavItem from './SidebarItem/NavItem/NavItem'
import ToDoItem from './SidebarItem/ToDoItem/ToDoItem'

const Sidebar = ({ navItems, todoItems }) => {
  const nav = navItems.map(n => <NavItem imgSrc={n.imgSrc} />)
  const todo = todoItems.map(t => <ToDoItem name={t.name} id={t.id} />)

  return (
    <div className={s.sidebar}>
      <div className={s.nav}>
        {nav}
      </div>
      <div className={s.todo}>
        <div className={s.todoItems}>
          Create new
                </div>
        <div>
          {todo}
        </div>
      </div>
    </div>
  )
}

export default Sidebar