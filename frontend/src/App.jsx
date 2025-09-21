import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Routers from "./router/Routers";

const App = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] font-[Helvetica] bg-[#101622]">
        <Navbar />
        <Routers />
        <Footer />
      </div>
    </>
  );
};

export default App;
