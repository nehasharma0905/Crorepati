import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateGame } from "../api/quizApi";
import { auth } from "../firebase/firebase";
import { quizActions } from "../redux/quizSlice";
import { getNextQuestionThunk } from "../redux/quizThunk";
import coinImg from "./../../public/assets/coin.png";
const Play = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log("logout");
    await auth.signOut();
    window.location.reload();
  };

  const handlePlay = async () => {
    try {
      console.log("play");
      const newQuiz = await generateGame();
      console.log("newQuiz", newQuiz);
      dispatch(quizActions.setQuiz(newQuiz.data));
      dispatch(quizActions.setLifeLine(newQuiz.data.lifelines));
      dispatch(getNextQuestionThunk(newQuiz.data.id));
      navigate("/questions");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box className={"play-page"}>
      <img src={coinImg} alt="logo" className="logo" />
      <ul className={"all-options"}>
        <li>
          <Button className="play-button" onClick={handlePlay}>
            Play
          </Button>
        </li>
        <li>
          <Button className="play-button">Leaderboard</Button>
        </li>
        <li>
          <Button className="play-button">Challenge a friend</Button>
        </li>
        <li>
          <Button className="play-button" onClick={handleLogout}>
            Logout
          </Button>
        </li>
      </ul>
    </Box>
  );
};

export default Play;
