import { Form } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import FormInput from "./FormInput";

const ChatUI = () => {
  return (
    <>
      <main className="bg-[#101622] w-full h-[87.5%] relative top-[11.75vw] border-red-400 flex flex-col justify-center items-center">
        
        <WelcomeScreen />

        <FormInput />
      </main>
    </>
  );
};

export default ChatUI;
