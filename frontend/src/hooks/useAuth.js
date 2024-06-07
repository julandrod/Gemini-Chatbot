import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserStatus, selectAuthState } from "../features/authSlice";
const useAuth = () => {
  const dispatch = useDispatch();
  const { isLogin, errorInfo } = useSelector(selectAuthState);

  useEffect(() => {
    const checkUser = async () => {
      dispatch(checkUserStatus());
    };
    checkUser();
  }, [dispatch]);

  return isLogin && !errorInfo;
};

export default useAuth;
