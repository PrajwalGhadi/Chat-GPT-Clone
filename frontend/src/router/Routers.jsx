import { Route, Routes } from "react-router-dom";

import ChatUI from "../pages/chatUI/ChatUI"
import Profile from "../pages/profile/Profile";
import History from "../pages/chatHistory/History";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatUI/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default Routers;
