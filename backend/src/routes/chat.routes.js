import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
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
  [authenticateUser, validatorMiddleware(chatSchema)],
  generateChat
);
chatRoutes.get("/all", authenticateUser, getAllChats);
chatRoutes.delete("/delete", authenticateUser, deleteAllChats);

export default chatRoutes;
