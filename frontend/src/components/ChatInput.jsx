import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewAnswer,
  selectChatState,
  updateLocalChats,
} from "../features/chatSlice";
import { selectAuthState } from "../features/authSlice";

const ChatInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { lastAnswer } = useSelector(selectChatState);
  const { userInfo } = useSelector(selectAuthState);


  useEffect(() => {
    dispatch(updateLocalChats({ message: lastAnswer, role: "assistant" }));
  }, [dispatch, lastAnswer]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();

    dispatch(getNewAnswer({ token: userInfo.token, message }));
    dispatch(updateLocalChats({ message, role: "user" }));

    setMessage("");
  };

  return (
    <div className="bg-main-bg flex items-center justify-start w-full h-16 ">
      <form
        className="flex items-center justify-center w-full h-full mb-2"
        onSubmit={handleSubmitMessage}
      >
        <input
          className="w-4/6 p-4 rounded-full ml-1 mr-2 md:mx-8 my-auto bg-main-button focus:bg-hover-button outline-none"
          type="text"
          placeholder="text anything..."
          value={message}
          onChange={handleChange}
        />
        <button
          className="h-14 text-white bg-main-button ml-2 mr-1 my-auto px-4 py-2 rounded-md hover:bg-hover-button"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
