import { Link } from "react-router-dom";
import logo from "/Google_Gemini_logo.svg.png";
import { useDispatch } from "react-redux";
import { logOutUser } from "../features/authSlice";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavLink = ({ onClick, to, text }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="text-white bg-main-button px-4 py-2 rounded-md hover:bg-hover-button"
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const isLogin = useAuth();
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="flex w-full bg-main-bg h-20 py-2 top-0 z-20 fixed justify-between items-center mx-auto px-4 lg:px-36 bg-center text-main-logo font-semibold border-b border-gray-700">
      <div className="flex flex-1 items-baseline">
        <div className="flex items-baseline ">
          <a href="/" className="flex rounded-md">
            <img src={logo} alt="logo" className="w-auto h-10 rounded-lg" />
            <span className="m-[15px] text-2xl text-slate-400 font-bold">
              CHATBOT
            </span>
          </a>
        </div>
        <div></div>
      </div>
      <div className="md:flex flex-2 gap-4 hidden ">
        {isLogin ? (
          <>
            <NavLink to="/chat" text="Chat" />
            <NavLink to="/" text="Log Out" onClick={handleLogout} />
          </>
        ) : (
          <NavLink to="/login" text="Sign In" />
        )}
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={() => setToggle(true)}
        >
          <svg
            className="w-6 h-6 text-white"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div
          className={`${
            !toggle
              ? "hidden -translate-x-full -z-10"
              : "flex translate-x-0 z-50 transition delay-150 duration-300 ease-in-out"
          } fixed top-0 left-0 w-full h-full bg-main-bg flex flex-col`}
        >
          <div className="flex justify-between items-center p-4">
            <div className="flex items-baseline ">
              <a href="/" className="flex rounded-md">
                <img src={logo} alt="logo" className="w-auto h-10 rounded-lg" />
                <span className="m-[15px] text-2xl text-slate-400 font-bold">
                  CHATBOT
                </span>
              </a>
            </div>
            <span
              className={`${
                toggle ? "flex text-white" : "hidden"
              } p-4 text-2xl font-bold h-fit`}
              onClick={() => setToggle(false)}
            >
              X
            </span>
          </div>
          <div className="flex flex-col gap-4 text-left capitalize text-xl tracking-wide text-white">
            {isLogin ? (
              <>
                <NavLink to="/chat" text="Chat" />
                <NavLink to="/" text="Log Out" onClick={handleLogout} />
              </>
            ) : (
              <NavLink to="/login" text="Sign In" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
