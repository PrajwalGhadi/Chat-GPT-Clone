
import WelcomeScreen from "./WelcomeScreen";
import FormInput from "./FormInput";
import clsx from "clsx";


const ChatUI = () => {
  return (
    <>
      <main className={clsx("bg-[#101622] w-full h-[87.5%] relative top-[11.25vw] flex flex-col justify-center items-center", "lg:w-[70vw] lg:left-[0vw] lg:top-[5vw]")}>
        
        <WelcomeScreen />

        <FormInput />
      </main>
    </>
  );
};

export default ChatUI;
