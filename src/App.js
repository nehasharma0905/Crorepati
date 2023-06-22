import "./App.css";
import "./style/styles.scss";
import { Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Challenge from "./pages/Challenge";
import "./style/global.scss";
import LeaderBoard from "./pages/LeaderBoard";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="login" element={<Login />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="challenge" element={<Challenge />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
      </Routes>
    </div>
  );
}

export default App;
