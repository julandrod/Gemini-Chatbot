/**
 * Helper function to avoid the use of try-catch in all controllers of HTTP requests
 *
 * @param {Function} Async function to be wrapped
 *
 * @example
 * const registerUser = tryCatchWrapper(async (req, res, next) => {
 *  const user = await User.create({...})
 *  ...
 *  ...
 * })
 */

export const tryCatchWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
