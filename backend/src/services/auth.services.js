import {
  CustomError,
  comparePassword,
  createJwt,
  encryptPassword,
} from "../helpers/index.js";
import User from "../models/User.js";

const findAllUsers = async () => {
  try {
    const users = await User.find().select("-password").select("-chats");
    return users;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const registerUser = async ({ name, email, password }) => {
  try {
    const alreadyRegister = await User.findOne({ email });

    if (alreadyRegister) throw new CustomError("Email already registered", 400);

    const hashPassword = await encryptPassword(password);

    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    const token = createJwt({
      payload: { id: newUser._id, email: newUser.email },
    });

    return { id: newUser._id, name: newUser.name, email: newUser.email, token };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndLogin = async ({ email, password }) => {
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) throw new CustomError("User not registered", 401);

    const passwordMatch = await comparePassword(password, foundUser.password);
    if (!passwordMatch) throw new CustomError("Invalid credentials", 401);

    const token = createJwt({
      payload: { id: foundUser._id, email: foundUser.email },
    });

    return {
      id: foundUser._id,
      name: foundUser.name,
      email: foundUser.email,
      token,
    };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndVerifyUser = async (id) => {
  try {
    const verifyUser = await User.findById(id);
    if (!verifyUser)
      throw new CustomError("User not found or invalid token", 404);

    if (id !== verifyUser._id.toString())
      throw new CustomError("Dont have permission", 401);

    return { name: verifyUser.name, email: verifyUser.email };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

export { findAllUsers, registerUser, findAndLogin, findAndVerifyUser };
