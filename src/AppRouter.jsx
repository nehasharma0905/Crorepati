import { Route, Routes } from "react-router-dom";
import { RouteProtector } from "./components/RouteProtector";
import Login from "./pages/Login";
import Play from "./pages/Play";
import Questions from "./pages/Questions";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouteProtector />}>
        <Route path="/" element={<Play />} />
        <Route path="/questions" element={<Questions />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
