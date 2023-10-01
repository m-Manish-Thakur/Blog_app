const express = require("express");
const router = express.Router();
const PostApi = require("../Models/post");


// Like a Post    -----------------------------------------------------------

router.post("/:id/like", async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.userId;

    const post = await PostApi.findById(postId);
    
    if (!post) {
      console.log("Post not Found");
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user has already liked the post
    if (post.likes.includes(userId)) {
      console.log('User has already liked this post');
      return res
        .status(400)
        .json({ message: "User has already liked this post" });
    }

    post.likes.push(userId);
    await post.save();
    return res.json(post);
  } catch (err) {
    console.log(err);
  }
});

//  Add a comment to a post  -----------------------------------------------------

router.post("/:id/comment", async (req, res) => {
  try {
    const postId = req.params.id;
    const { comment, author } = req.body;
    const post = await PostApi.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.comments.push({ comment, author });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error adding comment" });
  }
});


// Delete a comment   ------------------------------------------





module.exports = router;