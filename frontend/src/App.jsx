import { Route, Routes } from "react-router-dom";
import { Chat, Home, Login, NotFound } from "./pages";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();
  console.log(isLogin);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={isLogin ? <Chat /> : <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
