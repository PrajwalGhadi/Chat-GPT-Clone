import { Route, Routes, Router } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatUI />} />
    </Routes>
  );
};

export default Routers;
