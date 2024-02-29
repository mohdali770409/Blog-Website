import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    )
      next(errorHandler(500, "input field required"));
    //   res.status(500).json({
    //     success: false,
    //     message: "provide input fields",
    //   });

    const encryptedPassword = bcryptjs.hashSync(password, 10);
    console.log(encryptedPassword);

    if (!encryptedPassword)
      return res.status(500).json({ message: "error in encrypting password" });

    const user = new User({
      username,
      email,
      password: encryptedPassword,
    });

    const result = await user.save();

    res.status(200).json({
      success: true,
      message: "signup successfully",
      data: result,
    });
  } catch (error) {
    // console.log("error in signup");
    // return res.status(500).json({
    //   success: false,
    //   message: "error in signup",
    //   error: error.message,
    // });
    next(error);
  }
};