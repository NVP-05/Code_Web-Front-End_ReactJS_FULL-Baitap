import React from 'react'
import { NavLink } from 'react-router-dom'
import Register from '../Bai4/Register'

export default function Login() {
  return (
    <div>
      <form style={{marginTop:"200px", marginLeft:"650px"}} action="">
        <h3>Login account</h3>
        <label htmlFor="">Your email</label>
        <br />
        <input type="text" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" />
        <br />
        <br />
        <button>Login an account</button>
        <br />
        <br />
        <p>Already have an account ? <b><NavLink to="/register">Register here</NavLink></b></p>
      </form>
      
    </div>
  )
}
