import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({title, desc, img, author, read, id, category}) => {

  return (
    <Link to={`/blogs/${id}`} style={{textDecoration:'none', color:'rgb(30, 20, 50)'}}>
      <div id='post'>
              <img src={img} alt="" />
              <h3>{title}</h3>
              <p id='desc'>{desc.substring(0, 180)}</p>
              <div id='author'>
                  <h6>{category}</h6>
                  <h5>
                      <img src="Images/book.jpg" style={{width:'24px', marginRight:'7px'}}/>
                      {Math.round((desc.length)/250)} min read
                  </h5>
              </div>
      </div>
    </Link>
  )
}

export default Post
