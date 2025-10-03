import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className="login w-full h-full flex flex-col justify-center items-center lg:w-[30%] lg:shadow-xl/30 lg:shadow-[#385aa3] lg:relative lg:left-[35%] lg:px-10 lg:top-[0vw] -lg:translate-x-1/2 -lg:translate-y-1/2">
        <div className="login-form text-white w-full p-6 flex flex-col gap-10">
          <div className="titles flex flex-col justify-center items-center">
            <h1 className="text-[8vw] bg-gradient-to-br from-[#136BEC] to-[#E86B6B] bg-clip-text text-transparent lg:text-[3vw]">
              Welcome Back
            </h1>
            <p className="text-[4vw] text-[#a0a0a0] lg:text-[1.25vw]">Sign in to continue</p>
          </div>

          <div>
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Email/Username"
                className="p-4 border border-[#385aa3] w-full rounded-xl bg-gray-800 outline-0 lg:text-xl"
              />
              <input
                type="text"
                placeholder="Password"
                className="p-4 border border-[#385aa3] w-full rounded-xl bg-gray-800 outline-0 lg:text-xl"
              />

              <div className="flex justify-end">
                <h3 className="text-[#136BEC] px-4">Forgot Password?</h3>
              </div>

              <button className="lg:w-full max-h-[7%] bg-[#135bec] p-4 lg:p-4 rounded-xl text-white cursor-pointer text-xl">
                Login
              </button>
            </form>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <div className="line w-full h-[1px] bg-gray-400"></div>
            <h1 className="text-gray-400">OR</h1>
            <div className="line w-full h-[1px] bg-gray-400"></div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="lg:w-full max-h-[7%] bg-[#1F2937] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15 lg:px-40">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>

            <button className="lg:w-full max-h-[7%] bg-[#000000] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15 lg:px-40">
              <RiAppleLine className="text-2xl" /> Continue with Apple
            </button>

            <button className="lg:w-full max-h-[7%] bg-[#135bec] p-8 lg:p-8 rounded-xl text-white cursor-pointer text-xl flex gap-4 items-center justify-start px-15 lg:px-40">
              <FaFacebookF className="text-2xl" /> Continue with Facebook
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-400 lg:text-2xl">
              Already have an account?{" "}
              <span className="text-[#135bec]" onClick={()=> { navigate('/auth/register') }}>Sign Up</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
