import { extractCode, isCodeBlock } from "../utils";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// eslint-disable-next-line react/prop-types
const Avatar = ({ name }) => {
  return (
    <div className="flex items-start justify-center">
      <h2 className="flex items-center justify-center uppercase h-10 w-10 rounded-full bg-white text-black text-2xl font-bold">
        {name}
      </h2>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ChatItem = ({ role, part, username }) => {
  const messageCode = extractCode(part);
console.log(username)
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 justify-start">
        <Avatar name={role === "user" ? username : "✦"} />
        <div className="flex flex-col w-full md:w-11/12">
          {!messageCode && <p className="leading-relaxed">{part}</p>}
          {messageCode &&
            messageCode.length &&
            messageCode.map((block, idx) =>
              isCodeBlock(block) ? (
                <SyntaxHighlighter
                  className="rounded-xl bg-red-600"
                  style={coldarkDark}
                  lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                  language="javascript"
                  wrapLongLines={true}
                  wrapLines={true}
                  // showLineNumbers
                  key={idx}
                >
                  {block}
                </SyntaxHighlighter>
              ) : (
                <p key={idx}>{block}</p>
              )
            )}
        </div>
      </div>
      <hr className="h-px w-11/12 flex mx-auto my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default ChatItem;
