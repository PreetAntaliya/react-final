const User = require("../model/User");
const jwt = require("jsonwebtoken");

const userAdd = async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
      return res.status(400).json({ error: "Please fill the form correctly" });
    }

    if (password !== cpassword) {
      return res
        .status(400)
        .json({ error: "Password and Confirm Password don't match" });
    }

    if (password.length < 3 || password.length > 16) {
      return res
        .status(400)
        .json({ error: "Password must be between 3 and 16 characters" });
    }

    const checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Create new user
    const userCreate = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      userCreate,
    });
  } catch (err) {
    console.error("Error while creating user:", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    const token = jwt.sign({ payload: user }, "abcd", { expiresIn: "22h" });
    // res.setHeader('Authorization', 'Bearer ' + token);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const validateUser = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Admin Authorised...!",
      data : req.user 
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Admin Auth Error" + error,
    });
  }
};



module.exports = {
  userAdd,
  login,
  validateUser
};
