import express from "express";
const authRoutes = express.Router();

import {
  createUser,
  getAllUsers,
  loginUser,
  logoutUser,
  verifyUser,
} from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
import { validatorMiddleware } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../validator-schemas/login.schema.js";
import { registerSchema } from "../validator-schemas/register.schema.js";

authRoutes.get("/", getAllUsers);
authRoutes.post("/register", validatorMiddleware(registerSchema), createUser);
authRoutes.post("/login", validatorMiddleware(loginSchema), loginUser);
authRoutes.get("/verify", verifyToken, verifyUser);
authRoutes.get("/logout", verifyToken, logoutUser);

export default authRoutes;
