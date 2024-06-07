import { ChatLayout, Sidebar } from "../components";
import { useEffect } from "react";
import ChatBoard from "../components/ChatBoard";

const Chat = () => {

  useEffect(() => {
    // dispatch(getAllChats());
  }, []);

  return (
    <ChatLayout>
      <div className="flex">
        <Sidebar/>
        <ChatBoard />
      </div>
    </ChatLayout>
  );
};

export default Chat;
