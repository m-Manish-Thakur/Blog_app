import React, { useEffect, useState } from "react";
import "./style.css";
import Post from "../Componets/Post";
import { SERVER_URL } from "../Constants";

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
              img={`${SERVER_URL}/${item.coverImg}`}
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
