import { Route, Routes } from "react-router-dom";
import { Chat, Home, Login, NotFound } from "./pages";
import { useSelector } from "react-redux";
import { selectAuthState } from "./features/authSlice";

function App() {
  // const isLogin = useAuth();
  // console.log(isLogin);
  const { userInfo } = useSelector(selectAuthState);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={userInfo ? <Chat /> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
