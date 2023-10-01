const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Add this line to parse JSON data
router.use(express.json());

// Register

router.post("/register", async (req, res) => {
  try {
    // Checking if user is already exist or not
    const foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      // Hashing Password
      let hashPassword = await bcrypt.hash(req.body.password, 10);

      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      });
      console.log(user);
      res.status(201).json(user);
    } else {
      res.status(400).send("User already exists");
    }
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body.email);

    // Checking if user email is already exist
    let user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(400).send("Email is not exists");
      console.log("Email is not exists");
    }

    // Checking if password is match

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).send("Email or password is wrong");
      console.log("Email or password is wrong");
    }

    // Generate JWT Token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      "$uper$ecretKey231690"
    );
    res.json({ token, user });
    console.log({ token });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
