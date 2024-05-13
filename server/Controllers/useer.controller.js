const User = require("../Models/user.model");
const { createSecretToken } = require("../Config/SeecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, createdAt } = req.body;
    const errors = {};
    // Validate username
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }

    // Validate email
    if (!email) {
      errors.email = "Email is required";
    }

    // Validate password
    if (!password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, errors: { email: "User already exists" } });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      createdAt,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ success: true, message: "User signed up successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const errors = {};

    // Validate email
    if (!email) {
      errors.email = "Email is required";
    }

    // Validate password
    if (!password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const user = await User.findOne({ email });
    if (!user) {
      errors.email = "Incorrect email or password";
      return res.status(400).json({ errors });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      errors.password = "Incorrect email or password";
      return res.status(400).json({ errors });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
