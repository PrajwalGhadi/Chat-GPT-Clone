import { IoChatbubbleOutline } from "react-icons/io5";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col gap-2 items-center relative">
      <div className="border w-20 h-20 rounded-[100%] bg-[#101C36] blur-xs"></div>
      <IoChatbubbleOutline className="text-4xl text-[#136BEC] absolute top-5" />
      <h1 className="bg-gradient-to-br from-[#136BEC] to-[#E86B6B] bg-clip-text text-transparent text-4xl">
        Welcome, User
      </h1>
      <p className="text-[#b9b9b9] text-xl">
        Start a new conversation to begin
      </p>
    </div>
  );
};

export default WelcomeScreen;
