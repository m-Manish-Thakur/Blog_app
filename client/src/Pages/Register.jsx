import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmitForm = async (e) => {
      e.preventDefault();

      const formData = new FormData()
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);

      console.log(username, email, password);

      // Display the values
      for (const value of formData.values()) {
        console.log(value);
      }

    try{
      const res = await axios.post("http://localhost:8000/user/register", formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      navigate('/');

    }catch(err){
      console.log(err);
    }

    }



  return (
    <div id='form'>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          placeholder='Enter name' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

        <button type='submit'>Create Account</button>
        <p>Already have an account? <Link to='/user/login'><span>Login</span></Link></p>
      </form>
    </div>
  )
}

export default Register
