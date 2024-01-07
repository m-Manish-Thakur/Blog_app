const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const compression = require("compression");
const dotenv = require("dotenv");

const postRoute = require("./Routes/post");
const likeComments = require("./Routes/like-comments");
const userRoute = require("./Routes/user");

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;

const allowedOrigins = ["https://blog-app-five-sigma.vercel.app"];

app.use(compression());
app.use(
  cors({
    origin: (origin, callback) => {
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

// Port and MongoDB Connection
app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Server started and database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
});
