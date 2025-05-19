import UserModel from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({
      message: `User registered with username ${username}`,
      username: username,
      success: true
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      message: "Internal server error" , 
      success: false
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errMes = `Authentication failed email or password is wrong`

    if (!user) {
      return res.status(403)
      .json({ 
        message: errMes,
        success: false });
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(403)
      .json({ 
        message: errMes,  
        success: false});
    }

    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({ 
      message: "Login successfull",
      success: true,
      token,
      email,
      username : user.username
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
