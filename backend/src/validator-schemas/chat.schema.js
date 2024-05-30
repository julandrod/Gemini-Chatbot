import { body } from "express-validator";

export const chatSchema = [
  body("message").notEmpty().withMessage("Message is required"),
];
