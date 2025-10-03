
import WelcomeScreen from "./WelcomeScreen";
import FormInput from "./FormInput";
import clsx from "clsx";


const ChatUI = () => {
  return (
    <>
      <main className={clsx("bg-[#101622] w-full h-[87.5%] relative top-[75vw] flex flex-col justify-center items-center", "lg:w-[70vw] lg:left-[0vw] lg:top-[20vw]")}>
        
        <WelcomeScreen className={clsx("")}/>

        <FormInput />
      </main>
    </>
  );
};

export default ChatUI;
