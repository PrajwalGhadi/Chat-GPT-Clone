import ChatList from "./ChatList";

const History = () => {


  return (
    <section className="bg-[#101622] w-full h-[87.5%] relative top-[11.75vw] border-red-400 flex flex-col justify-center items-center p-5 ">
      <button className="w-full bg-[#135bec] p-4 rounded-xl text-white">
        New Chat
      </button>

      <ChatList />
    </section>
  );
};

export default History;
