import React, { useEffect, useState } from "react";
import "./style.css";
import Post from "../Componets/Post";

const Blogs = ({ data }) => {
  const [Data, setData] = useState(data);
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");

  // Filter the data based on the selected category
  useEffect(() => {
    if (selectedCategory === "All Blogs") {
      // If 'All Blogs' is selected, display all posts
      setData(data);
    } else {
      // Otherwise, filter the posts by category
      const filterData = data.filter((item) => selectedCategory === item.category);
      setData(filterData);
    }
  }, [selectedCategory, data]);

  return (
    <>
      <div id="allBlogs">
        {Data ? (
          Data.map((item) => (
            <Post
              id={item._id}
              title={item.title}
              desc={item.desc}
              category={item.category}
              img={`http://localhost:8800/${item.coverImg}`}
              read={"5"}
            />
          ))
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;

// <div id="category" className='sticky-top'>
//                 <div className='category_wrapper'>
//                     <a href="#"
//                         onClick={() => setSelectedCategory('All Blogs')}
//                         className={selectedCategory === 'All Blogs' ? 'active-link' : ''}
//                     >
//                         All Blogs
//                     </a>

//                     <a href="#"
//                         onClick={() => setSelectedCategory('Health & Fitness')}
//                         className={selectedCategory === 'Health & Fitness' ? 'active-link' : ''}
//                     >
//                         Health & Fitness
//                     </a>

//                     <a  href="#"
//                         onClick={() => setSelectedCategory('Food')}
//                         className={selectedCategory === 'Food' ? 'active-link' : ''}
//                     >
//                         Food
//                     </a>

//                     <a  href="#"
//                         onClick={() => setSelectedCategory('Lifestyle')}
//                         className={selectedCategory === 'Lifestyle' ? 'active-link' : ''}
//                     >
//                         Lifestyle
//                     </a>

//                     <a href="#"
//                         onClick={() => setSelectedCategory('Photography')}
//                         className={selectedCategory === 'Photography' ? 'active-link' : ''}
//                     >
//                         Photography
//                     </a>

//                     <a href="#"
//                         onClick={() => setSelectedCategory('Sports')}
//                         className={selectedCategory === 'Sports' ? 'active-link' : ''}
//                     >
//                         Sports
//                     </a>
//                 </div>
//             </div>
