import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (

      <div id='form'>
        <h1>Login</h1>
        <form action="#">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter email'/>

          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter password'/>

          <button>Login</button>
          <p>Don't have an account? <Link to='/user/register'><span>create account</span></Link></p>
        </form>
      </div>
  )
}

export default Login
