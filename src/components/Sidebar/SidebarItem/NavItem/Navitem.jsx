import React from 'react';
import s from './Navitem.module.css';
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={s.navItem}>
            {/* <NavLink to={n.linkTo} activeClassName={s.activeLink}> */}
            <img src={props.imgSrc} alt="..." />
            {/* </NavLink> */}
        </div>
    )
}

export default NavItem

