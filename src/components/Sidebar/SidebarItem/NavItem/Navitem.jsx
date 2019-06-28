import React from 'react'
import s from './Navitem.module.css'

const NavItem = ({ imgSrc }) => {
  return (
    <div className={s.navItem}>
      {/* <NavLink to={n.linkTo} activeClassName={s.activeLink}> */}
      <img src={imgSrc} alt="..." />
      {/* </NavLink> */}
    </div>
  )
}

export default NavItem

