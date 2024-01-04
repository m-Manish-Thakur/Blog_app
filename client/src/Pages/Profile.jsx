import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import axios, { toFormData } from "axios";
import { useNavigate, Link } from "react-router-dom";
import UpdatePost from "../Componets/UpdatePost";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const navigate = useNavigate();

  const { user, setUser, token, setToken } = useContext(UserContext);

  const [Posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (user) {
      // Fetch data from the backend API Dat
      axios
        .get(`http://localhost:8800/api/${user._id}/blogs`)
        .then((response) => {
          setPosts(response.data);
          console.log(Posts);
          setIsLoading(false); // Set isLoading to false when data is loaded
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [user, isLoading]);

  // #######################  DELETE POST  ####################################

  const handleDelete = (postId) => {
    try {
      console.log("called");
      axios.delete(`http://localhost:8800/api/${postId}`, {
        data: { username: user.username },
      });
      window.location.replace("/user/profile");
    } catch (err) {
      console.log(err);
    }
  };

  //  ###################    Update Post   ##############################

  const handleEdit = () => {
    setIsUpdate(true);
  };

  const handleCloseUpdate = () => {
    setIsUpdate(false); // Hide the UpdatePost component
  };

  // ####################    LOGOUT   ##########################

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Remove the user from local storage
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    setToken("");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <div id="profileHeading">
        <h1>My Profile</h1>
        <button onClick={logout} type="button" class="btn btn-danger">
          Logout <i class="fa-solid fa-arrow-right-from-bracket" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>

      <div id="profile">
        <div id="profilePage">
          <div id="yourPosts">
            <h3>Manage Your Posts</h3>

            <div id="userPostsCon">
              {Posts ? (
                Posts.map((item) => (
                  <>
                    <div id="userPosts" key={item._id}>
                      <Link to={`/blogs/${item._id}`} style={{ textDecoration: "none", color: "rgb(30, 20, 50)" }}>
                        <img src={`http://localhost:8800/${item.coverImg}`} />
                      </Link>
                      <h4>{item.title.substring(0, 45)}...</h4>
                      <div className="d-flex justify-content-around mt-4">
                        <button onClick={() => handleEdit()} type="button" class="btn btn-primary">
                          <i class="fa-solid fa-pen"></i> Edit
                        </button>
                        <button onClick={() => handleDelete(item._id)} type="button" class="btn btn-outline-danger">
                          <i class="fa-solid fa-trash-can"></i> Delete
                        </button>
                      </div>
                      {isUpdate && (
                        <div id="updatePostOverlay">
                          <UpdatePost
                            title={item.title}
                            desc={item.desc}
                            postId={item._id}
                            onClose={handleCloseUpdate}
                          />
                        </div>
                      )}
                    </div>
                  </>
                ))
              ) : (
                <div>
                  <h1>You haven't posted any posts yet.</h1>
                </div>
              )}
            </div>
          </div>

          {isLoading ? (
            <h1>Loading...</h1>
          ) : user ? (
            <div id="userProfile">
              <div className="profileImg">
                <i class="fa-solid fa-upload"></i>
              </div>
              <h2>{user.username}</h2>
              <p className="role">MERN Stack Developer | Designer</p>
              <p className="desc">
                Work on back-end & front-end development of core scripts using NodeJS/ MongoDB/React. js/Angular/Express
                /Redux.
              </p>
              <div className="d-flex justify-content-evenly">
                <h3>
                  400+ <br /> Followers
                </h3>
                <h3>
                  {Posts.length} <br /> Posts
                </h3>
              </div>
            </div>
          ) : (
            <h1>User not found.</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
