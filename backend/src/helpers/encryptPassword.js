import bcrypt from "bcrypt";

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (inputPassword, password) => {
  return await bcrypt.compare(inputPassword, password);
};

export { encryptPassword, comparePassword };
