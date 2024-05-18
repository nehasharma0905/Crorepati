import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Play from "./pages/Play";
import Login from "./pages/Login";
import { useState } from "react";

const Protector = (props) => {
  return props.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="/login" element={<Login />} />

      <Route path="/4" element={<h1>ShaTi</h1>} />
      <Route path="/" element={<Protector isLoggedIn={false} />}>
        <Route path="/2" element={<h1>Anshul</h1>} />
        <Route path="/3" element={<h1>Tilondiya</h1>} />
      </Route>
    </Routes>
  );
};
