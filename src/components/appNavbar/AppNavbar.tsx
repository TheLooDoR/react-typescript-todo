import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppNavbar.scss'

const AppNavbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper light-blue AppNavbar">
      <NavLink to="/" className="brand-logo">
        Todo list
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">TodoList</NavLink>
        </li>
        <li>
          <NavLink to="/about">Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default AppNavbar
