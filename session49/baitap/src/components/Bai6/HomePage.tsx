import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}
