import { HiOutlineUser } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";

const Profile = () => {
  return (
    <section className="bg-[#101622] w-full h-[87.5%] relative top-[11.75vw] border-red-400 flex flex-col gap-5 p-5 ">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center justify-center relative">
          <div className="border w-35 h-35 rounded-[100%] bg-[#11337A] blur-xs"></div>
          <HiOutlineUser className="text-8xl text-[#136BEC] absolute top-4 left-5" />
        </div>

        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-white text-2xl">Username</h1>
          <p className="text-[#b9b9b9]">Joined 2025</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
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
    </section>
  );
};

export default Profile;
