//This code is to build connection with db and pushing data into it
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { exists } = require("../models/task");

router.post("/signin", async (req, res) => {
  try {
    const { username } = req.body;
    const { email } = req.body;
    const existingUser = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Username already existing" });
    } else if (username.length < 4) {
      return res
        .status(400)
        .json({ message: "Username should have atleast 4 char" });
    }
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exitising" });
    }
    const hashPass = await bcrypt.hash(req.body.password, 15);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });

    await newUser.save();
    return res.status(400).json({ message: "Sign Successfull" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server Error" });
  }
});

router.get("/log-in", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (!existingUser) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  bcrypt.compare(password, existingUser.password, (error, data) => {
    if (data) {
      const authClaims = [{ name: username }, { jti: jwt.sign({}, "abc") }];
      const token = jwt.sign({ authClaims }, "abc", { expiresIn: "2d" });
      res.status(200).json({ id: existingUser._id, token: token });
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  });
});
module.exports = router;
