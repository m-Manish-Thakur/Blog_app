import React, { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import axios from "axios";
import "./style.css";
import { SERVER_URL } from "../Constants";

const AddBlog = () => {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCate] = useState("");
  const [coverImg, setCoverImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append("title", title);
    postData.append("desc", desc);
    postData.append("category", category);
    postData.append("coverImg", coverImg);
    postData.append("author", user._id);
    postData.append("username", user.username);

    console.log(postData);

    // Display the key/value pairs
    for (const pair of postData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    const res = await axios.post(`${SERVER_URL}/api/addPost`, postData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    window.location.replace("/blogs/" + res.data._id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="addPost">
        <div class="mb-4">
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Title"
            name="title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div class="mb-4">
          <textarea
            class="form-control"
            id="desc"
            rows="5"
            placeholder="Tell your story.."
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="mb-3 d-flex justify-content-between" id="fileInput">
          <label class="form-label" htmlFor="uploadBtn">
            <i class="fa-solid fa-cloud-arrow-up"></i> Upload Cover Image
          </label>
          <input
            type="file"
            id="uploadBtn"
            placeholder="Cover Image"
            name="coverImg"
            onChange={(e) => setCoverImg(e.target.files[0])}
          />
        </div>
        <select class="form-select" aria-label="Default select example" onChange={(e) => setCate(e.target.value)}>
          <option selected>Choose Category</option>
          <option value="Coding">Coding</option>
          <option value="Health & fitness">Health & fitness</option>
          <option value="Food">Food</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Photography">Photography</option>
          <option value="Sports">Sports</option>
        </select>

        <button type="submit" class="btn btn-dark mt-4">
          <i class="fa-solid fa-upload" style={{ marginRight: "5px" }}></i> Publish
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
