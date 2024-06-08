import { useDispatch, useSelector } from "react-redux";
import { selectAuthState } from "../features/authSlice";
import { getAllChats, selectChatState } from "../features/chatSlice";
import { useEffect, useRef } from "react";
import ChatItem from "./ChatItem";
import ChatInput from "./ChatInput";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-10 h-10 animate-spin"></div>
    </div>
  );
};

const ChatBoard = () => {
  const { userInfo } = useSelector(selectAuthState);
  const name = userInfo?.name?.slice(0, 2);
  const { chatsUser, lastAnswerLoading } = useSelector(selectChatState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChats({ token: userInfo.token }));
  }, [dispatch, userInfo.token]);

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="flex flex-col w-full h-full items-start">
      <div className="h-[calc(100vh-9rem)] flex flex-col flex-grow w-full overflow-y-auto px-4 md:px-10 pt-2 gap-y-8">
        {chatsUser.map(({ content, role }, idx) => (
          <ChatItem key={idx} username={name} role={role} part={content} />
        ))}
        {lastAnswerLoading ? <Loader /> : null}
        <div ref={divRef} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatBoard;
