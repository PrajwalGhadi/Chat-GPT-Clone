import Footer from "../../pages/Footer";
import Navbar from "../../pages/Navbar";

import { Outlet } from "react-router-dom"; // 1. Import Outlet

const CommonLayout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Navbar />
      {/* using outlet to show the routes from router with common navbar and footer all over the application after login */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
