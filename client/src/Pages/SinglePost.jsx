import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import axios from "axios";

const SinglePost = () => {
  const { user } = useContext(UserContext);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiking, setIsLiking] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Get Full Post By ID
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/${postId}`)
      .then((response) => {
        setPost(response.data);
        setLikes(response.data.likes.length);
        setComments(response.data.comments);
        console.log(comments);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);

  // Handle Likes  --------------------------------------------------------

  const userId = user ? user._id : "";
  const userHasLiked = post ? post.likes.includes(userId) : false;

  useEffect(() => {
    if (userHasLiked) {
      setIsLiking(true);
    }
  }, [userHasLiked]);

  const handleLike = async () => {
    if (!isLiking) {
      setIsLiking(true);

      try {
        if (post) {
          const response = await axios.post(
            `http://localhost:8000/api/${post._id}/like`,
            { userId }
          );
          const updatedPost = response.data;
          setLikes(updatedPost.likes.length);
        }
      } catch (err) {
        console.error("Error while liking the post:", err);
      }
    }
  };

  // Handle Comments  ---------------------------------------------
  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/api/${post._id}/comment`,
        {
          comment: comment,
          author: user.username,
        }
      );
      setComments(response.data.comments);
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <div id="singlePost">
        {post ? (
          <div id="container">
            <img
              src={`http://localhost:8000/${post.coverImg}`}
              alt="Post Cover"
            />
            <div className="d-flex justify-content-between align-items-center px-2 py-3">
              <h5>{post.username ? `@${post.username}` : "@John Dev"}</h5>
              <div className="d-flex gap-4 align-items-center">
                <button
                  id="like"
                  onClick={handleLike}
                  disabled={isLiking}
                  style={
                    isLiking
                      ? { background: "royalblue", color: "white" }
                      : { background: "gray" }
                  }
                >
                  {likes} {userHasLiked ? "Liked" : isLiking ? "Liked" : "Like"}
                  <i
                    className="fa-regular fa-thumbs-up"
                    style={{ paddingLeft: "5px" }}
                  ></i>
                </button>
                <i className="fa-regular fa-bookmark fs-4"></i>
                <i className="fa-regular fa-share-from-square fs-4"></i>
              </div>
            </div>
            <h1>{post.title}</h1>
            <p id="desc" style={{ whiteSpace: "pre-wrap" }}>
              {post.desc}
            </p>

            <div id="comment">
              <form onSubmit={(e) => handleComment(e)}>
                <textarea
                  cols="30"
                  rows="6"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <button type="submit" className="btn btn-success">
                  Comment
                </button>
              </form>
            </div>

            <div id="commentsContainer">
              <h4>Comments</h4>
              {comments.map((item) => (
                <div className="content">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    style={{ height: "35px", width:'35px'}}
                  />
                  <div className="item">
                    <p className="author">{item.author}</p>
                    <p className="date">{new Date(item.date).toDateString()}</p>
                    <p className="comment">{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SinglePost;
