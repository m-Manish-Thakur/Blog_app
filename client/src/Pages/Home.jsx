import React from 'react'
import Post from '../Componets/Post'
import AllBlogs from './AllBlogs'

const Home = ({data}) => {
  return (
    <>
        <div id="home">
            <div id="hero1">
                <img src="Images/hero.webp" />
                <div className='content'>
                    <h1>How to become a Frontend Developer in 2023</h1>
                    <p>Becoming a frontend developer in 2023 requires dedication, persistence, and a commitment to learning. In this article I’m going to describe a general guideline to help you become a frontend developer. In this article I’m going to describe a general guideline to help you become a frontend developer.</p>
                    <div id="user">
                        <img src="https://assets-global.website-files.com/5e6b8d7e7b16b33558f1b3db/5ea1de802fca7b3ff52759ee_MarcStickdorn-ThisisDoing.jpg" 
                             style={{height:'50px', width:'50px', borderRadius:'50%'}}/>
                        <span style={{marginLeft:'20px'}}>
                            <p style={{fontWeight:'bold', color:'rgb(50,50,50)', marginBottom:'0',fontSize:'15px'}}>Steve Smith</p>
                            <p style={{color:'rgb(50,50,50)', fontSize:'15px'}}> <img src="Images/book.jpg" style={{width:'25px'}}/> 5 min read</p>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Post 
                    title={"Master CSS: Learn what matters"}
                    desc={"CSS is an essential part of Web Devlopment, and you should strive to master it. Learn about the different CSS properties and how they affect the layout and appearance of web pages. You should also learn about CSS frameworks like Bootstrap, which can help you design responsive and attractive web pages.Mastering CSS requires a combination of foundational knowledge, consistent practice, and an understanding of web design principles. Here are some tips to help you master CSS:"}
                    img={"https://miro.medium.com/v2/resize:fit:828/0*LsWHdQMIyU4mWxnQ"}
                    author={'Manish Thakur'}
                    read={'5'}
                    category={'Coding'}
                />
            </div>
        </div>
        <AllBlogs data={data}/>
    </>
  )
}

export default Home
