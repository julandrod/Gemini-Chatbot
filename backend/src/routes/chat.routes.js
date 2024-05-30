import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";
import {
  deleteAllChats,
  generateChat,
  getAllChats,
} from "../controllers/chat.controllers.js";
import { validatorMiddleware } from "../middlewares/validator.middleware.js";
import { chatSchema } from "../validator-schemas/chat.schema.js";
const chatRoutes = express.Router();

chatRoutes.post(
  "/new",
  [verifyToken, validatorMiddleware(chatSchema)],
  generateChat
);
chatRoutes.get("/all", verifyToken, getAllChats);
chatRoutes.delete("/delete", verifyToken, deleteAllChats);

export default chatRoutes;
