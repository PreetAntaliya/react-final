const User = require("../model/User");

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

module.exports = {
  userAdd,
};
