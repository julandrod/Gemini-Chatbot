import { tryCatchWrapper, endpointResponse } from "../helpers/index.js";
import {
  findAllUsers,
  findAndLogin,
  findAndVerifyUser,
  registerUser,
} from "../services/auth.services.js";

const getAllUsers = tryCatchWrapper(async (req, res, next) => {
  const users = await findAllUsers();
  endpointResponse({
    res,
    message: "Users found",
    body: users,
  });
});

const createUser = tryCatchWrapper(async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = await registerUser({ name, email, password });

  endpointResponse({
    res,
    code: 201,
    message: "User created successfully",
    body: newUser,
  });
});

const loginUser = tryCatchWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const infoUser = await findAndLogin({ email, password });

  endpointResponse({
    res,
    message: "Login successfully",
    body: { ...infoUser },
  });
});

const verifyUser = tryCatchWrapper(async (req, res, next) => {
  const { id } = res.locals.user;
  const user = await findAndVerifyUser(id);

  endpointResponse({
    res,
    message: "User verified",
    body: { user },
  });
});

const logoutUser = tryCatchWrapper(async (req, res, next) => {
  const { id } = res.locals.user;
  const user = await findAndVerifyUser(id);

  clearCookie({ res, cookieName: COOKIE_NAME });

  endpointResponse({
    res,
    message: "User logged out",
    body: { user },
  });
});

export { getAllUsers, createUser, loginUser, verifyUser, logoutUser };
