import { ChatLayout, Sidebar } from "../components";
import ChatBoard from "../components/ChatBoard";

const Chat = () => {
  return (
    <ChatLayout>
      <div className="flex">
        <Sidebar />
        <ChatBoard />
      </div>
    </ChatLayout>
  );
};

export default Chat;
