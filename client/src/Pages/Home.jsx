import React, {useState} from 'react'
import Post from '../Componets/Post';
import Blogs from './Blogs'

const Home = ({data}) => {

  // const [Data, setData] = useState(data);

  return (
    <>
        <div id="home">
            <div className="container">
                <h1>Welcome! to Blogify<br /> Read the most <br /> interesting Blogs!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <button>Explore Our Blogs</button>
                <button className='about'>About Us</button>
                <h4>Popular Categories: <span>Sports</span> <span>Lifestyle</span> <span>Food</span> <span>Photography</span></h4>
            </div>
            <img src="https://www.daswritingservices.com/wp-content/uploads/2021/01/blog-banner-image.svg"  />
        </div>
        <h1 id='latest'>Latest Blogs</h1>
        <div id='allBlogs'>
                {
                    data ?
                        data.slice(0, 3).map((item) => (
                            <Post
                                id={item._id}
                                title={item.title}
                                desc={item.desc}
                                category={item.category}
                                img={`http://localhost:8000/${item.coverImg}`}
                                read={'5'}
                            />
                        ))
                        :
                        <div>
                            <h1>Loading...</h1>
                        </div>
                }
            </div>
                
            <button id='btn'>See More <i class="fa-solid fa-arrow-right-long" style={{marginLeft:'5px'}}></i></button>
    </>
  )
}


export default Home
