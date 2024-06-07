import { SectionLayout, Typing } from "../components";
import chat from "/chat.png"

const Home = () => {
  return (
    <SectionLayout>
      <div className="flex flex-col justify-center items-center h-screen mx-2">
        <Typing />
        <div className="flex justify-center mt-8">
            <img src={chat} alt="chat screenshot" className="w-4/5 h-auto rounded-md shadow-lg shadow-slate-400" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Home;
