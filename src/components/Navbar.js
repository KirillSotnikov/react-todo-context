import React from 'react'
import { NavLink } from 'react-router-dom'

const linksArray = [
  {
    href: "/",
    name: 'Home'
  },
  {
    href: "/about",
    name: 'About'
  },
  {
    href: "/not-found-page",
    name: 'Not found'
  }
]

const NavList = ({links}) => links.map((item, i) => {
  return (
    <li 
      key={i}
      className="nav-item"
    >
      <NavLink
        className="nav-link"
        to={item.href}
        exact
      >
        {item.name}
        </NavLink>
    </li>
  )
})

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Note App
    </div>
    <ul className="navbar-nav">
      <NavList links={linksArray} />
    </ul>
  </nav>
)