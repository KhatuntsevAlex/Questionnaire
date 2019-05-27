import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import {DragSource} from 'react-dnd'
import NavItem from './SidebarItem/NavItem/Navitem';
import ToDoItem from './SidebarItem/ToDoItem/ToDoItem';

const Sidebar = (props) => {
    let navItems = props.navItems.map(n => <NavItem imgSrc={n.imgSrc} />)

    let todoItems = props.todoItems.map(t => <ToDoItem name={t.name} />)


    return (
        <div className={s.sidebar}>
            <div className={s.nav}>
                {navItems}
            </div>
            <div className={s.todo}>
                <div className={s.todoItems}>
                    Create new
                </div>                
                <div>
                    {todoItems}
                </div>
            </div>

        </div>
    )
}

export default Sidebar