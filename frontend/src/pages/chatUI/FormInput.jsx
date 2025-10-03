import clsx from "clsx";
import { BsSend } from "react-icons/bs";


const FormInput = () => {
  return (
    <form action="" className={clsx("fixed bottom-22 w-full px-5", "lg:w-[70vw] lg:bottom-25")}>
      <textarea
        type="text"
        placeholder="Message..."
        cols="40"
        className="bg-transparent border border-[#233763] text-[#e9e9e9] p-3 w-full rounded-md outline-0 lg:text-2xl lg:p-5"
      />

      <button className="absolute right-8 top-5">
        <BsSend className="text-[#136BEC] text-4xl" />
      </button>
    </form>
  );
};

export default FormInput;
