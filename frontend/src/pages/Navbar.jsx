import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";

import clsx from "clsx";
import { useState } from "react";

const Navbar = () => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <>
      {/* Navbar for Mobile view */}
      <nav
        className={clsx(
          "lg:hidden",
          "bg-[#101622] text-white flex justify-between items-center px-10 py-2 min-h-5 border-b-1 border-[#233763] fixed top-0 w-full text-2xl"
        )}
      >
        <div>
          <IoMenu />
        </div>
        <div>CHAT</div>
        <div>
          <IoMdAdd />
        </div>
      </nav>

      {/* Navbar for Desktop View */}
      <nav
        className={clsx(
          "hidden",
          "bg-[#101622] text-white lg:flex justify-between items-center lg:px-20 lg:py-5 lg:min-h-5 border-b-1 border-[#233763] lg:fixed lg:top-0 w-full lg:text-2xl z-99"
        )}
      >
        <h1 className="bg-gradient-to-br from-[#136BEC] to-[#E86B6B] bg-clip-text text-transparent text-4xl">
          ChatGPT Clone
        </h1>

        <div className="absolute right-30 flex gap-5 items-center">
          <HiOutlineUser className="border text-[2vw] rounded-full p-2 border-[#233763] text-[#136BEC]" />

          <h1 className="pr-8 border-r-1 border-[#233763]">John Doe</h1>

          <div
            className="border rounded-full p-2 bg-gray-800 cursor-pointer border-[#233763] text-[#136BEC]"
            onClick={() => {
              setShowSetting(!showSetting);
            }}
          >
            <FiSettings />
          </div>

          {showSetting && (
            <div className="flex flex-col gap-2 absolute right-0 top-15 z-10 w-[12vw]" onMouseLeave={()=> {setShowSetting(!showSetting)}}>
              <div className="bg-[#1C212D] p-4 flex justify-between items-center rounded-xl">
                <h1 className="text-white">Edit Profile</h1>
                <SlArrowRight className="text-white" />
              </div>
              <div className="bg-[#1C212D] p-4 flex justify-between items-center rounded-xl">
                <h1 className="text-white">Settings</h1>
                <SlArrowRight className="text-white" />
              </div>
              <div className="bg-[#1C212D] p-4 flex justify-between items-center rounded-xl">
                <h1 className="text-red-500">Logout</h1>
                <SlArrowRight className="text-red-500" />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
