import { model } from "../config/geminiConfig.js";
import { CustomError } from "../helpers/index.js";
import User from "../models/User.js";

const findUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new CustomError("User not registered", 401);

    return user;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const createChat = async ({ userId, message }) => {
  try {
    const user = await findUser(userId);

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = await response.text();

    user.chats.push({ role: "user", content: message });
    user.chats.push({ role: "assistant", content: text });

    await user.save();

    return { text, chats: user.chats };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllChatsUser = async ({ userId }) => {
  try {
    const user = await findUser(userId);

    if (userId !== user._id.toString())
      throw new CustomError("Dont have permission", 401);

    return { chats: user.chats };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteChats = async ({ userId }) => {
  try {
    const user = await findUser(userId);
    if (userId !== user._id.toString())
      throw new CustomError("Dont have permission", 401);

    user.chats = [];
    user.save();

    return { chats: user.chats };
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

export { createChat, findAllChatsUser, findAndDeleteChats };
