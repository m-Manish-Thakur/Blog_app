import React from 'react'
import './style.css'
import Post from '../Componets/Post'

const AllBlogs = ({data}) => {
  return (
    <>

<div id="category" className='sticky-top'>
                <div className='category_wrapper'>
                    <a href="#" style={{fontWeight:'600'}}>All Blogs</a>
                    <a href="#">Coding</a>
                    <a href="#">Heath & Fitness</a>
                    <a href="#">Food</a>
                    <a href="#">Lifestyle</a>
                    <a href="#">Photography</a>
                    <a href="#">Sports</a>
                </div>
        </div>

        <div id='allBlogs'>
                {
                     data.map((item)=>(
                        <> 
                            <Post 
                                id={item._id}
                                title={item.title}
                                desc={item.desc}
                                category={item.category}
                                img={`http://localhost:8000/${item.coverImg}`}
                                author={'Vinay Sharma'}
                                read={'5'}
                            />
                        </>
                    ))  
                }
        </div>
    </>
  )
}

export default AllBlogs
