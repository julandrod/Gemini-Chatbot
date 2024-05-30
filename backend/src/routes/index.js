import { Router } from "express";
import authRoutes from "./auth.routes.js";
import chatRoutes from "./chat.routes.js";

const routeHandler = Router();

routeHandler.use("/auth", authRoutes);
routeHandler.use("/chat", chatRoutes);

export default routeHandler;
