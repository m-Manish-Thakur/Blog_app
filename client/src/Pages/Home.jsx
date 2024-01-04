import React, { useContext } from "react";
import Post from "../Componets/Post";
import UserContext from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../Constants";

const Home = ({ data }) => {
  const { user } = useContext(UserContext);
  console.log(SERVER_URL);
  return (
    <>
      <div id="home">
        <div className="container">
          <h1>
            Welcome! to Blogify
            <br /> Read the most <br /> interesting Blogs!
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </p>
          <Link to="/blogs">
            <button>Explore Our Blogs</button>
          </Link>
          {user ? (
            <Link to="/blogs/addBlog">
              <button className="about">
                {" "}
                <i
                  class="fa-regular fa-pen-to-square"
                  style={{ paddingRight: "8px", fontSize: "17px", color: "rgb(28, 46, 76)" }}
                ></i>{" "}
                Write
              </button>
            </Link>
          ) : (
            <Link to="/user/register">
              <button className="about">Get Started</button>
            </Link>
          )}

          <h4>
            Popular Categories: <span>Sports</span> <span>Lifestyle</span> <span>Food</span> <span>Photography</span>
          </h4>
        </div>
        <img src="https://www.daswritingservices.com/wp-content/uploads/2021/01/blog-banner-image.svg" />
      </div>
      <h1 id="latest">Latest Blogs</h1>
      <div id="latestBlogs">
        {data ? (
          data
            .slice(0, 3)
            .map((item) => (
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

      <button id="btn">
        See More <i class="fa-solid fa-arrow-right-long" style={{ marginLeft: "5px" }}></i>
      </button>
    </>
  );
};

export default Home;
