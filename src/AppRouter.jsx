import { Route, Routes } from "react-router-dom";
import { Play } from "./pages/Play";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
    </Routes>
  );
};
