import { Route, Routes } from "react-router-dom";

import Profile from "../pages/profile/Profile";
import History from "../pages/chatHistory/History";
import Home from "../pages/chatUI/Home";
import Login from "../pages/authPages/Login";
import CommonLayout from "../components/commonLayout/CommonLayout";
import Register from "../pages/authPages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element = {<Register />} />

      <Route element={<CommonLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routers;
