import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div id='form'>
      <h1>Create Account</h1>
      <form action="#">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter name'/>
        
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Enter email'/>
        
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter password'/>

        <button>Create Account</button>
        <p>Already have an account? <Link to='/user/login'><span>Login</span></Link></p>
      </form>
    </div>
  )
}

export default Register
