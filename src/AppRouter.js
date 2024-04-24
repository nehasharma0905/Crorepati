import { Route, Routes } from "react-router-dom";
import Play from "./pages/Play";

/**
 * This is Component for Routing purpose only
 * Why this is separated ? Because we need to try to keep a single component for single purpose,
 * and App.js is our entry file which might be used for multiple purposes later on
 * so it's better to keep it separate 
 */

/**
 * This component will decide which page to show based on URL.
 * Most common advantage to having such file is that you can track all the routes 
 * in one place and you can also add Authentication to these routes.
 */
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Play />} />
    </Routes>
  );
};
