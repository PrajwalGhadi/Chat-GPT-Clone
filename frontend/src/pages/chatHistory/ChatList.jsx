import { CiChat1 } from "react-icons/ci";


const ChatList = () => {
  let chatHistory = [
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
    {
      title: "Pricing Trip Planning",
      description: "What are the best Places in India",
    },
  ];

  return (
    <>
      <div className="w-full h-full border-white flex flex-col  gap-5 py-5 overflow-auto overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {chatHistory &&
          chatHistory.map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 items-center relative bg-[#10234A] rounded-lg p-2"
              >
                <div>
                  <div className="border w-15 h-15 rounded-[100%] bg-[#11337A] blur-xs"></div>
                  <CiChat1 className="text-3xl text-[#136BEC] absolute top-6 left-6" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white">{item.title}</h1>
                  <p className="text-[#b9b9b9]">{item.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ChatList;
