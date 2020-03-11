import React from 'react'
import {NavLink} from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <h1>Not Found page</h1>
      <NavLink to="/">
        Return to Home page
      </NavLink>
    </>
  )
}