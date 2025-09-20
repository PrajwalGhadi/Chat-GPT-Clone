import { IoMenu } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="bg-[#101622] text-white flex justify-between items-center px-5 py-2 min-h-5 border-b-1 border-[#233763] fixed top-0 w-full text-2xl">
        <div><IoMenu /></div>
        <div>CHAT</div>
        <div><IoMdAdd /></div>
    </nav>
  )
}

export default Navbar