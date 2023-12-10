const User = require("../models/users");
const { hash, compare } = require("bcryptjs");
const createSubaccount = require("../utils/createSubaccount");
const handleCookieAndResponse = require("../utils/handleCookieAndResponse");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const email = req.body.email;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(401)
        .json({ success: false, data: "User already registered! 🙂" });
    }

    // Hash the password
    const hashedPassword = await hash(req.body.password, 10);

    const { password, ...others } = req.body;

    // Create subaccount using SDK
    const subaccountData = await createSubaccount(others);

    // Create a new user in the database
    const user = new User({
      email: req.body.email,
      password: hashedPassword,
      data: subaccountData.data,
    });

    await user.save();

    // Set cookie and send response
    handleCookieAndResponse(res, user);
  } catch (error) {
    // Handle errors
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      data: "Error creating user. Please try again. 🙂",
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, data: "User not registered! 🙂" });
    }

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      return res
        .status(403)
        .json({ success: false, data: "User not registered! 🙂" });
    }

    // Set cookie and send response
    handleCookieAndResponse(res, user);
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);

    if (!user) {
      return res
        .status(401)
        .send("User not registered or token malfunctioned! 🙂");
    }

    if (user.id != res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match! 🙂");
    }

    // clear cookie
    res.clearCookie(process.env.COOKIE_NAME, {
      domain: "onrender.com",
      // domain: "localhost",
      httpOnly: true,
      signed: true,
      path: "/",
    });

    return res
      .status(200)
      .json({ success: true, message: "user successfully logged out! 🙂" });
  } catch {
    next(error);
  }
};
