import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

const Sidebar = (props) => {
  return (
    <ul id="sidebar">
      <li>
        <NavLink to='/stations' activeClassName='selected'>Stations</NavLink>
      </li>
      <li>
        <NavLink to='/users' activeClassName='selected'>Users</NavLink>
      </li>
    </ul>
  )
}

export default Sidebar
