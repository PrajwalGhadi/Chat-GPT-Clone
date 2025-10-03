import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()
  return (
    <>
      <section className="register w-full h-full flex flex-col justify-center items-center lg:w-[30%] lg:shadow-xl/30 lg:shadow-[#385aa3] lg:relative lg:left-[35%] lg:px-10 lg:top-[0vw] -lg:translate-x-1/2 -lg:translate-y-1/2">
        <div className="flex absolute top-0 w-full text-white justify-between px-5 lg:px-10 py-3">
          <div className="w-[15%] p-2" onClick={()=> { navigate('/auth/login') }}>
            <MdArrowBackIos className="text-4xl text-center" />
          </div>
          <div className="w-[85%] p-2">
            <h1 className="px-[25vw] text-xl lg:px-[9vw] lg:text-2xl">Sign Up</h1>
          </div>
        </div>

        <div className="register-form text-white w-full p-6 flex flex-col gap-10 mt-10">
          <div>
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Username"
                className="p-4 border border-[#385aa3] w-full rounded-xl bg-gray-800 outline-0 lg:text-xl"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-4 border border-[#385aa3] w-full rounded-xl bg-gray-800 outline-0 lg:text-xl"
              />
              <input
                type="text"
                placeholder="Password"
                className="p-4 border border-[#385aa3] w-full rounded-xl bg-gray-800 outline-0 lg:text-xl mb-10"
              />

              <button className="lg:w-full max-h-[7%] bg-[#135bec] p-4 lg:p-4 rounded-xl text-white cursor-pointer text-xl">
                Register
              </button>
            </form>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="line w-full h-[1px] bg-gray-400"></div>
            <h1 className="text-gray-400">OR</h1>
            <div className="line w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="lg:w-full max-h-[7%] bg-[#1F2937] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>

            <button className="lg:w-full max-h-[7%] bg-[#000000] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15">
              <RiAppleLine className="text-2xl" /> Continue with Apple
            </button>

            <button className="lg:w-full max-h-[7%] bg-[#135bec] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15">
              <FaFacebookF className="text-2xl" /> Continue with Facebook
            </button>
          </div>
        </div>

        <div>
            <p className="text-gray-400 lg:text-2xl">Already have an account? <span className="text-[#135bec]" onClick={()=> {navigate('/auth/login')}}>Log In</span></p>
        </div>
      </section>
    </>
  );
};

export default Register;
