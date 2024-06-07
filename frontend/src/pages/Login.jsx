/* eslint-disable react/prop-types */
import { Form, Formik } from "formik";
import { loginSchema } from "../schemas";
import { InputForm, SectionLayout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setupUser } from "../features/authSlice";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
  const { userInfo, errorInfo } = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useAuth();

  const [userIsLogin, setUserIsLogin] = useState(true);

  // TODO: check if this useEffect is really necessary
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [dispatch, isLogin, navigate]);

  console.log(isLogin);
  console.log(userInfo);
  console.log(errorInfo);

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;
    const dataUser = { name, email, password };

    if (userIsLogin) {
      dispatch(setupUser({ dataUser, endPoint: "login" }));
    } else {
      dispatch(setupUser({ dataUser, endPoint: "register" }));
    }

    actions.resetForm();
  };

  return (
    <SectionLayout>
      <div className="h-screen bg-hover-button flex items-center justify-center container md:mt-12 md:w-7/12 lg:w-5/12 rounded-lg">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form className="bg-inherit">
              <h3 className="mb-8 text-2xl font-bold text-center bg-inherit">
                Welcome to Chatbot
              </h3>
              {!userIsLogin ? (
                <InputForm
                  labelText="Name:"
                  type="text"
                  placeholder="Name..."
                  name="name"
                />
              ) : null}
              <>
                <InputForm
                  labelText="Email:"
                  type="email"
                  placeholder="Email..."
                  name="email"
                />
                <InputForm
                  labelText="Password:"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </>
              <div className="flex items-center justify-center bg-inherit my-6">
                <button
                  type="submit"
                  disabled={props.isSubmitting}
                  className="text-white font-bold bg-main-bg px-4 py-2 rounded-md hover:bg-main-button"
                >
                  {userIsLogin ? "Sign In" : "Register"}
                </button>
              </div>
              <div className="flex flex-col container items-center justify-center bg-hover-button my-4 font-semibold text-lg">
                <p className="bg-hover-button">
                  {userIsLogin ? "New here?" : "Already have an account?"}
                </p>
                <button
                  className="bg-hover-button ml-2 underline underline-offset-4"
                  onClick={() => setUserIsLogin(!userIsLogin)}
                >
                  {userIsLogin ? "Create your account." : "Sign in instead"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </SectionLayout>
  );
};

export default Login;
