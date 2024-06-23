import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import { useEffect, useMemo, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { useTimer } from "react-timer-hook";
import { Button } from "@mui/joy";
import { IoMdExit } from "react-icons/io";
import { quizActions } from "../redux/quizSlice";

 const amount = [
    70000000, 50000000, 20000000, 10000000, 8000000, 5000000, 2000000, 1000000, 500000, 100000, 50000, 20000, 10000, 5000, 1000,
  ];

const Questions = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const {totalSeconds, isRunning, start, pause, resume, restart} = useTimer({
    expiryTimestamp: 1000 * 60 * 2,
    onExpire: () => {
      console.warn("onExpire");
    },
  })
 
  const lifeLineDescription = {
    "Flip Question":
      "flipQuestionshdga dhgqf djqhwgruq d hqwr xasqjhr qghwefuq2 asd hqwgd asdsdvuqye dhjrgr addqhgr huewr",
    "50-50":
      "50-50shdga dhgqf djqhwgruq d hqwr xasqjhr qghwefuq2 asd hqwgd asdsdvuqye dhjrgr addqhgr huewr",
    "Audience Poll":
      "AudiencePollshdga dhgqf djqhwgruq d hqwr xasqjhr qghwefuq2 asd hqwgd asdsdvuqye dhjrgr addqhgr huewr",
    "Ask Expert":
      "AskExpertshdga dhgqf djqhwgruq d hqwr xasqjhr qghwefuq2 asd hqwgd asdsdvuqye dhjrgr addqhgr huewr",
  };
  const [activeLifeline, setActiveLifeline] = useState("");
  const [lifelinebox, setLifelinebox] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const { activeQuestionData, quiz, questionStatus } = useSelector((state) => state.quiz)
  
  useEffect(() => {
    if (!quiz) {
      navigate("/")
    }
  }, [navigate, quiz])
  
  useEffect(() => {
    if (activeQuestionData) {
      const newTime = activeQuestionData.timeLimit;
      const time = new Date();
      time.setSeconds(time.getSeconds() + newTime);
      restart(time, true)
    }
  }, [activeQuestionData, quiz, restart])


  const activeQuestionNumber = useMemo(() => {
    if (activeQuestionData) {
      return amount.findIndex((price) => price === activeQuestionData.price)
    }
  }, [activeQuestionData])
  
  const handleQuit = () => {
    dispatch(quizActions.clearQuizSlice());
    navigate("/")
  }

  return (
    <Box className="questions-page">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="lifeline-box-modal">
          <h1>Use Life Lines</h1>
          <ul>
            <li onClick={() => setActiveLifeline("Flip Question")}>
              Flip Question
            </li>
            <li onClick={() => setActiveLifeline("50-50")}>50-50</li>
            <li onClick={() => setActiveLifeline("Audience Poll")}>
              Audience Poll
            </li>
            <li onClick={() => setActiveLifeline("Ask Expert")}>Ask Expert</li>
          </ul>
          <Box className="lifeline-description">
            <h3>About {activeLifeline}:</h3>
            <p>{lifeLineDescription[activeLifeline]}</p>
          </Box>
          <button> Confirm </button>
        </Box>
      </Modal>
      <Box className="questions-container">
        <Box className="amount">
          <button onClick={handleQuit}><IoMdExit />Quit </button>
          <ul>
            {amount.map((e, index) => (
              <li key={e} className={activeQuestionNumber === index ? 'active': ''}>
                <FaCoins />
                {e}
              </li>
            ))}
          </ul>
        </Box>
        {activeQuestionData ? (<Box className="question">
          <Box className="life-line">
            <h1>Question {(15-activeQuestionNumber)}</h1>
            <button onClick={handleOpen}>Use Life Line</button>
          </Box>
          <h1 className="clock">{totalSeconds}</h1>
          <p className="question-text">
            {activeQuestionData.question}
          </p>
          <Box className="option">
            {
              activeQuestionData.options.map((option, index) => (
                <Box className="option-text" key={option.id}>{option.text}</Box>
              ))
            }
          </Box>
          {lifelinebox ? (
            <Box className="lifelinebox">
              <div className="lifelinebox-header">
                <p>{activeLifeline}</p>
                <IoClose onClick={() => setLifelinebox(false)} />
              </div>
              <p className="lifelinebox-text">
                Writebox is a text editor designed with simplicity and
                distraction-free writing. While many applications tend to become
                feature-rich and complex over time, Writebox takes a different
                approach. Writebox continues to focus on the essential features
                required for writing on a computer, providing an environment
                that allows writers to concentrate without unnecessary
                distractions.
              </p>
              <Box className="audiencePoll">
                <Box className={"progress-container"}>
                  <span>A</span>
                  <LinearProgress
                    className="progress"
                    variant="determinate"
                    value={30}
                  />
                </Box>
                <Box className={"progress-container"}>
                  <span>B</span>
                  <LinearProgress
                    className="progress"
                    variant="determinate"
                    value={20}
                  />
                </Box>
                <Box className={"progress-container"}>
                  <span>C</span>
                  <LinearProgress
                    className="progress"
                    variant="determinate"
                    value={40}
                  />
                </Box>
                <Box className={"progress-container"}>
                  <span>D</span>
                  <LinearProgress
                    className="progress"
                    variant="determinate"
                    value={10}
                  />
                </Box>
              </Box>
            </Box>
          ) : null}

          <button className="lock-btn">Lock Answer</button>
        </Box>) : questionStatus.isLoading ? <Loader /> : null}
      </Box>
    </Box>
  )
};

export default Questions;
