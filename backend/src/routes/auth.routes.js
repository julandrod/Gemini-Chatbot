import express from "express";
const authRoutes = express.Router();

import {
  createUser,
  getAllUsers,
  loginUser,
  verifyUser,
  logoutUser,

} from "../controllers/auth.controllers.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { validatorMiddleware } from "../middlewares/validator.middleware.js";
import { loginSchema } from "../validator-schemas/login.schema.js";
import { registerSchema } from "../validator-schemas/register.schema.js";

authRoutes.get("/", getAllUsers);
authRoutes.post("/register", validatorMiddleware(registerSchema), createUser);
authRoutes.post("/login", validatorMiddleware(loginSchema), loginUser);
authRoutes.get("/verify", authenticateUser, verifyUser);
authRoutes.get("/logout", authenticateUser, logoutUser);

export default authRoutes;
