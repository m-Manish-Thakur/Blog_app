const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  coverImg: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  username: {
    type: String,
  },
  likes : [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  comments: [
    {
      comment: String,
      author: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ]
});

const PostApi = mongoose.model("PostApi", apiSchema);

module.exports = PostApi;
