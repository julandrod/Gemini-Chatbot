import { COOKIE_NAME } from "../helpers/constants.js";
import { tryCatchWrapper, endpointResponse } from "../helpers/index.js";
import {
  findAllUsers,
  findAndLogin,
  findAndVerifyUser,
  registerUser,
} from "../services/auth.services.js";

const clearCookie = ({ res, cookieName }) => {
  res.clearCookie(cookieName, {
    httpOnly: true,
    domain: "localhost",
    signed: true,
    path: "/",
  });
};

const createCookie = ({ res, cookieName, token }) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);

  res.cookie(cookieName, token, {
    path: "/",
    domain: "localhost",
    expires,
    httpOnly: true,
    signed: true,
  });
};

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

  clearCookie({ res, cookieName: COOKIE_NAME });
  createCookie({ res, cookieName: COOKIE_NAME, token: newUser.token });

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

  clearCookie({ res, cookieName: COOKIE_NAME });
  createCookie({ res, cookieName: COOKIE_NAME, token: infoUser.token });

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
  const {id } = res.locals.user
  const user = await findAndVerifyUser(id)

  clearCookie({ res, cookieName: COOKIE_NAME });

  endpointResponse({
    res,
    message: "User logged out",
    body: { user },
  });
}) 

export { getAllUsers, createUser, loginUser, verifyUser, logoutUser };
