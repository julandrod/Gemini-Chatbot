import { CustomError } from "../helpers/index.js";

/**
 * Throw a custom error if the route is not found
 *
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @param {Next} next Next middleware function
 *
 */
export const notFoundMiddleware = (req, res, next) => {
  throw new CustomError("Route not found", 404);
};
