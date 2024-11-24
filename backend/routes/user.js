//This code is to build connection with db and pushing data into it 
const express = require("express");
const router = express.Router();
const User = require("../models/user");
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

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    return res.status(400).json({ message: "Sign Successfull" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server Error" });
  }
});
module.exports = router;
