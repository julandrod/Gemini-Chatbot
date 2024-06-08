/**
 * Validate the schemas built in express-validator
 * @param {Schema} schema schema built with express-validator
 * @returns response with all errors if are any or pass to the next process if there is no errors
 *
 * @example
 * router.post("/users", validatorMiddleware(testSchema), registerController)
 */
import { validationResult } from "express-validator";

export const validatorMiddleware = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const error = errors
      .array()
      .map((item) => item.msg)
      .join(", ");

    // throw new CustomError(error, 422);

    return res.status(422).json({ error, code: 422 });
  };
};
