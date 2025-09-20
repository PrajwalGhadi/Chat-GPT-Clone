import ChatUI from "./pages/chatUI/ChatUI";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] font-[Helvetica] bg-[#101622]">
        <Navbar />
        <ChatUI />
        <Footer />
      </div>
    </>
  );
};

export default App;
