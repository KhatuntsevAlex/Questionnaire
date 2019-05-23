import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
    let navItems = props.navItems.map(n =>
        <div className={s.navItem}>
            {/* <NavLink to={n.linkTo} activeClassName={s.activeLink}> */}
            <img src={n.imgSrc} alt="..." />
            {/* </NavLink> */}
        </div>)

    let todoItems = props.todoItems.map(t =>
        <div className={s.todoItem}>
            {/* <NavLink to={n.linkTo} activeClassName={s.activeLink}> */}
            {t.name}
            {/* </NavLink> */}
        </div>)


    return (
        <div className={s.sidebar}>
            <div className={s.nav}>
                {navItems}
            </div>
            <div className={s.todo}>
                <div className={s.todoItems}>
                    <span>Create new</span>
                </div>                
                <div>
                    {todoItems}
                </div>
            </div>

        </div>
    )
}

export default Sidebar