import { Route, Routes } from "react-router-dom";

import Profile from "../pages/profile/Profile";
import History from "../pages/chatHistory/History";
import Home from "../pages/chatUI/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default Routers;
