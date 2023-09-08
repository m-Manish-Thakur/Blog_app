import React from 'react'

const Post = ({title, desc, img, author, read}) => {

  return (
    <div id='post'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p id='desc'>{desc.substring(0, 200)}</p>
            <div id='author'>
                <h6>@{author}</h6>
                <h5>
                    <img src="Images/book.jpg" style={{width:'24px', marginRight:'7px'}}/>
                    {read} min read
                </h5>
            </div>
    </div>
  )
}

export default Post
