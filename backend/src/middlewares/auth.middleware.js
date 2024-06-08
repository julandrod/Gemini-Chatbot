import {
  isTokenValid,
  CustomError,
  tryCatchWrapper,
} from "../helpers/index.js";

const authenticateUser = tryCatchWrapper(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("Token not present", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const {id, email} = isTokenValid({token});
    res.locals.user = { id, email };
    next();
  } catch (error) {
    throw new CustomError("Not valid token", 401);
  }
});

const authorizeByRole = (role) => {
  return tryCatchWrapper(async (req, res, next) => {
    if (req.user.role !== role) {
      throw new CustomError("Not allowed to access this route", 401);
    }
    next();
  });
};

export {  authenticateUser, authorizeByRole };
