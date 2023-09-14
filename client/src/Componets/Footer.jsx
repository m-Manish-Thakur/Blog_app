import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>   
        <div className="item">
            <h3>Blogify</h3>
            <div style={{display:'flex', alignItems:'center'}}>
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-link"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-regular fa-envelope"></i>
            </div>
            <p>Welcome! to Blogify <br /> Read the most <br /> interesting Blogs!</p>
        </div>
        <div className="item">
            <h2>Product</h2>
            <a href="#">Landingpage</a>
            <a href="#">Features</a>
            <a href="#">Documentation</a>
            <a href="#">Referral Program</a>
            <a href="#">Pricing</a>
        </div>
        <div className="item">
            <h2>Services</h2>
            <a href="#">Documentation</a>
            <a href="#">Design</a>
            <a href="#">Themes</a>
            <a href="#">Illustrations</a>
            <a href="#">UI Kit</a>
        </div>
        <div className="item">
            <h2>Company</h2>
            <a href="#">About</a>
            <a href="#">Terms</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Careers</a>
        </div>
        <div className="item">
            <h2>More</h2>
            <a href="#">Documentation</a>
            <a href="#">License</a>
            <a href="#">Changelog</a>
        </div>
    </div>
  )
}

export default Footer
