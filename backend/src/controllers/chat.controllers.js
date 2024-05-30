import { endpointResponse, tryCatchWrapper } from "../helpers/index.js";
import {
  createChat,
  findAllChatsUser,
  findAndDeleteChats,
} from "../services/chat.services.js";

const generateChat = tryCatchWrapper(async (req, res, next) => {
  const { message } = req.body;
  const { id: userId } = res.locals.user;

  const chats = await createChat({ userId, message });

  endpointResponse({
    res,
    message: "Chat created successfully",
    body: chats,
  });
});

const getAllChats = tryCatchWrapper(async (req, res, next) => {
  const { id: userId } = res.locals.user;
  const chats = await findAllChatsUser({ userId });

  endpointResponse({
    res,
    message: "Chats found successfully",
    body: chats,
  });
});

const deleteAllChats = tryCatchWrapper(async (req, res, next) => {
  const { id: userId } = res.locals.user;
  const chats = await findAndDeleteChats({ userId });

  endpointResponse({
    res,
    message: "Chats deleted successfully",
    body: chats,
  });
});

export { generateChat, getAllChats, deleteAllChats };
