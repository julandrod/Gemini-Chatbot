
export const extractCode = (message) => {
  if (message.includes("```")) {
    return message.split("```");
  }
};

export const isCodeBlock = (message) => {
  if (
    message.includes("=") ||
    message.includes(";") ||
    message.includes("[") ||
    message.includes("]") ||
    message.includes("{") ||
    message.includes("}") ||
    message.includes("#") ||
    message.includes("//")
  ) {
    return true;
  }
  return false;
};
