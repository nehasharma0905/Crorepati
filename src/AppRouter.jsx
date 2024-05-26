import { Route, Routes } from "react-router-dom";
import { RouteProtector } from "./components/RouteProtector";
import Login from "./pages/Login";
import Play from "./pages/Play";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteProtector/>}>
        <Route path="/" element={<Play />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
