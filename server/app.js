const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postRoute = require("./Routes/post");
const likeComments = require("./Routes/like-comments");
const userRoute = require("./Routes/user");
const cors = require("cors");
require("dotenv").config();

const allowedOrigins = ["https://blog-app-five-sigma.vercel.app"];

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
  mongoose.mongoose
    .connect(process.env.DATABASE_URL, {
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
