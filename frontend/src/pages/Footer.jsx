import { CiChat1 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#101622] text-white flex justify-between items-center px-5 py-2 border-t-1 border-[#233763] fixed bottom-0 w-full text-lg min-h-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#135bec]" : "text-white"
          }
        >
          <div className="flex flex-col justify-between items-center">
            <CiChat1 className="text-2xl" />
            <p>Chat</p>
          </div>
        </NavLink>

        <NavLink to="/history"
          className={({ isActive }) =>
            isActive ? "text-[#135bec]" : "text-white"
          }>
          <div className="flex flex-col justify-between items-center">
            <MdHistory className="text-2xl" />
            <p>History</p>
          </div>
        </NavLink>

        <NavLink to="/profile"
          className={({ isActive }) =>
            isActive ? "text-[#135bec]" : "text-white"
          }>
          <div className="flex flex-col justify-between items-center">
            <HiOutlineUser className="text-2xl" />
            <p>Profile</p>
          </div>
        </NavLink>
      </footer>
    </>
  );
};

export default Footer;
