import { useSelector } from "react-redux";
import { selectChatState } from "../features/chatSlice";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { chatsUser } = useSelector(selectChatState);

  const roleUserChats = chatsUser.filter((chat) => chat.role === "user");
  // Getting the last 10 chats from the user
  const lastChats = roleUserChats.slice(
    roleUserChats.length - 10,
    roleUserChats.length
  );

  return (
    <div className="hidden lg:block w-4/12 bg-main-bg border-r border-gray-700 h-[calc(100vh-5rem)] overflow-hidden">
      <div className="h-5/6 overscroll-y-auto flex flex-col items-center justify-start">
        <div className="w-full flex items-center justify-center p-1 my-4 border-b border-b-gray-700">
          <p className="mx-2 my-4">
            These are the last 10 prompts you enter
          </p>
        </div>
        {lastChats.map((chat, idx) => (
          <SidebarItem key={idx} content={chat.content} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
