const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");


//Signin user
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Password is incorrect." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.SALT,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};


//Signup user
const signup = async (req, res) => {
  try {
    const { firstName, lastName, password, email, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password does not match." });

    const hashedPassword = await bcrypt.hash(password, 8);

    const result = await User.create({
      email: email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SALT,
      { expiresIn: "1h" }
    );

    res.status(200).send({ result: result, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = { signin, signup };
