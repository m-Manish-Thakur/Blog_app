const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoute = require("./Routes/post");
const likeComments = require("./Routes/like-comments");
const userRoute = require("./Routes/user");
const cors = require("cors");

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/api", postRoute);
app.use("/api", likeComments);
app.use("/user", userRoute);

//  Port and MongoDB Connection

app.listen(8000, () => {
  console.log("Server Started");
  mongoose
    .connect("mongodb://localhost:27017/blogify_DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
