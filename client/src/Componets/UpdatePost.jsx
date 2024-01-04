import React, { useContext, useState } from "react";
import UserContext from "../Contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../Constants";

const UpdatePost = ({ title, desc, postId, onClose }) => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [postTitle, setTitle] = useState(title);
  const [postDesc, setDesc] = useState(desc);

  // ######################  UPDATE POST  ###################################

  const handleUpdate = async (postId) => {
    try {
      const response = await axios.put(`${SERVER_URL}/api/${postId}`, {
        title: postTitle,
        desc: postDesc,
      });

      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div id="updatePost">
        <form onSubmit={(e) => handleUpdate(postId)}>
          <div className="container">
            <div className="d-flex justify-content-between align-item-center">
              <h2 className="fs-4">Update Post</h2>
              <i class="fa-regular fa-circle-xmark fs-3" onClick={onClose}></i>
            </div>
            <br />
            <label>Title</label>
            <input type="text" value={postTitle} autoFocus onChange={(e) => setTitle(e.target.value)} />

            <label>Description</label>
            <textarea cols="30" rows="10" value={postDesc} onChange={(e) => setDesc(e.target.value)}></textarea>

            <button type="submit" className="btn btn-primary mt-3" style={{ float: "right" }}>
              Update Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePost;
