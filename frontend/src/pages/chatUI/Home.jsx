import React from "react";
import ChatUI from "./ChatUI";
import clsx from "clsx";
import { SlArrowRight } from "react-icons/sl";

const Home = () => {
  return (
    <>
      <div className={clsx("lg:w-full h-full lg:flex lg:gap-20 lg:px-5")}>
        <aside
          className={clsx(
            "hidden",
            "lg:flex lg:flex-col lg:w-[20vw] lg:h-[87.5%] relative lg:top-[5vw] lg:border-r-2 border-[#233763] px-8 py-5 lg:gap-5"
          )}
        >
          <button className="lg:w-full max-h-[7%] bg-[#135bec] lg:p-4 rounded-xl text-white cursor-pointer">
            New Chat
          </button>

          <input
            type="text"
            placeholder="Search Chat..."
            className="border-[#233763] border p-4 rounded-xl text-2xl text-gray-100 outline-none focus:outline-[#135bec] focus:border-[#135bec]"
          />

          <div className="h-full border-[#233763] border overflow-auto rounded-xl"></div>
        </aside>
        <ChatUI />
      </div>
    </>
  );
};

export default Home;
