import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const ChatLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="h-[calc(100vh-3rem)] bg-main-bg py-20 text-white">
        {children}
      </section>
    </>
  );
};

export default ChatLayout;
