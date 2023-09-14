import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
            <nav class="navbar navbar-expand-lg  px-5" id='navbar'>
              <div class="container-fluid">
                  <img src="Images/logo2.png" class='navbar-brand' alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'5vw'}}>
                    <li class="nav-item mx-2">
                      <Link to='/'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                    </li>
                    <li class="nav-item mx-2">
                      <Link to='/blogs'><a class="nav-link" href="#">Explore Blogs</a></Link>
                    </li>
                    <li class="nav-item mx-2">
                      <Link to='blogs/addBlog'><a class="nav-link" href="#">Add Blog</a></Link>
                    </li>
                    <li class="nav-item dropdown  mx-2">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                      </a>
                      <ul class="dropdown-menu">
                        <Link to='/user/login'><li><a class="dropdown-item" href="#">Login</a></li></Link>
                        <Link to='/user/register'><li><a class="dropdown-item" href="#">Create Account</a></li></Link>
                      </ul>
                    </li>
                  </ul>
                  <div class="d-flex align-items-center" role="search">
                        <Link to='/user/login'><a href="#" className='mx-4'>Login</a></Link>
                        <Link to='/user/register'><button type="button" class="btn btn-success">Get Started</button></Link>
                  </div>
                </div>
              </div>
            </nav>
    </div>
  )
}

export default Navbar
