const express = require("express");
const router = express.Router();
const multer = require("multer");
const PostApi = require("../Models/post");

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Create a new post -----------------------------------------------------------

router.post("/addPost", upload.single("coverImg"), async (req, res) => {
  try {
    const { title, desc, category, author, username } = req.body;
    const imagePath = req.file ? req.file.path : "";

    const newPost = await PostApi.create({
      title,
      coverImg: imagePath,
      desc,
      category,
      author,
      username,
    });
    console.log(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    console.log("Error", err);
  }
});

// Get all posts  ------------------------------------------------------------

router.get("/allPosts", async (req, res) => {
  try {
    const api = await PostApi.find({});
    res.json(api);
  } catch (err) {
    console.error("Error fetching all posts:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Post By ID  ---------------------------------------------------------

router.get("/:id", async (req, res) => {
  try {
    const post = await PostApi.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.log(err);
  }
});

// Get Post By ID of Particular User  ---------------------------------------------------------

router.get("/:id/blogs", async (req, res) => {
  try {
    const post = await PostApi.find({ author: req.params.id });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.log(err);
  }
});

// Update Post    ------------------------------------------------------------

router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, desc } = req.body;

    const updatedPost = await PostApi.findByIdAndUpdate(
      postId,
      { title, desc },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Delete Post    ------------------------------------------------------------

router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await PostApi.findByIdAndDelete(req.params.id);
    if (deletedPost) {
      console.log("Post Deleted");
    } else {
      console.log("Post Not Found");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
