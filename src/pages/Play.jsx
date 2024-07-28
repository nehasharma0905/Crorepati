import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateGame } from "../api/quizApi";
import { auth } from "../firebase/firebase";
import { quizActions } from "../redux/quizSlice";
import { getNextQuestionThunk } from "../redux/quizThunk";
import coinImg from "./../../public/assets/coin.png";
import { useCallback, useState } from "react";


const Play = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    console.log("logout");
    await auth.signOut();
    window.location.reload();
  };

  const handlePlay =  useCallback(async () => {
    try {
      setLoading(true);
      const newQuiz = await generateGame();
      dispatch(quizActions.setQuiz(newQuiz.data));
      dispatch(quizActions.setLifeLine(newQuiz.data.lifelines));
      await dispatch(getNextQuestionThunk(newQuiz.data.id));
      setLoading(false);
      navigate("/questions");
    } catch (error) {
      console.log("error occurred while creating quiz", error);
    }
  }, [dispatch, navigate]);

  return (
    <Box className={"play-page"}>
      <img src={coinImg} alt="logo" className="logo" />
      <ul className={"all-options"}>
        <li>
          <Button className="play-button"
            onClick={handlePlay}
            loading={loading}>
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
