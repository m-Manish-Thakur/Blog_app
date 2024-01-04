const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoute = require("./Routes/post");
const likeComments = require("./Routes/like-comments");
const userRoute = require("./Routes/user");
const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

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

app.listen(8800, () => {
  console.log("Server Started");
  mongoose
    .connect("mongodb+srv://manishthakur231690:BlogApp231690@cluster0.j8m2kuw.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
