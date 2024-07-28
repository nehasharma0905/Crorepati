import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import { gameOverStatus, getCorrectAnswer } from "../api/quizApi";
import { Loader } from "../components/Loader";
import { quizActions } from "../redux/quizSlice";
import { getLifeLineUsedThunk, getNextQuestionThunk } from "../redux/quizThunk";

const amount = [
  70000000, 50000000, 20000000, 10000000, 8000000, 5000000, 2000000, 1000000,
  500000, 100000, 50000, 20000, 10000, 5000, 1000,
];

const Questions = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { totalSeconds, pause, restart, resume } = useTimer({
    expiryTimestamp: 1000 * 60 * 2,
    onExpire: async () => {
      await gameOverStatus(quiz.id, "timeOut");
      console.warn("onExpire");
    },
  });
 
  const [activeLifeline, setActiveLifeline] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    pause();
  };
  const handleClose = () => {
    setActiveLifeline(null);
    setOpen(false)
    resume();
  };

  const {
    activeQuestionData,
    quiz,
    questionStatus,
    lifeLineData,
    lifeLineDetails,
  } = useSelector((state) => state.quiz);

  useEffect(() => {
    if (!quiz) {
      navigate("/");
    }
  }, [navigate, quiz]);

  useEffect(() => {
    if (activeQuestionData) {
      pause();
      const newTime = activeQuestionData.timeLimit;
      const time = new Date();
      time.setSeconds(time.getSeconds() + newTime);
      restart(time, true);
    }
  }, [activeQuestionData, pause, quiz, restart]);

  useEffect(() => {
    if (lifeLineDetails) {
      pause();
      setActiveLifeline(null);
      const newTime = lifeLineDetails.timeLimit;
      const time = new Date();
      time.setSeconds(time.getSeconds() + newTime);
      restart(time, true);
    }
  },[lifeLineDetails, pause, restart]);

  const lifeLineStatus = useMemo(() => {
    if (lifeLineDetails) {
      let status = {
        type: lifeLineDetails.lifelineId,
      };
      if (status.type === "AskExpert" || status.type === "AudiencePoll") {
        status.show = true;
        if (status.type === "AskExpert") {
          status.data = lifeLineDetails.hint;
        } else {
          status.data = lifeLineDetails.stats;
        }
      } else {
        status.show = false;
      }
      return status;
    } else {
      return null;
    }
  }, [lifeLineDetails]);

  const activeQuestionNumber = useMemo(() => {
    if (activeQuestionData) {
      return amount.findIndex((price) => price === activeQuestionData.price);
    }
  }, [activeQuestionData]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectAnswer = (answerId) => {
    setSelectedAnswer(answerId);
  };

  const [lockAnswerLoader, setLockAnswerLoader] = useState(false);

  const lockAnswer = useCallback(async() => {
    pause();
    setLockAnswerLoader(true);
    const { data } = await getCorrectAnswer(
      quiz.id,
      activeQuestionData.id,
      selectedAnswer
    );
    console.log(data);
    if (data.isCorrect) {
      dispatch(getNextQuestionThunk(quiz.id));
    } else {
      await gameOverStatus(quiz.id, "wrongAnswer");
    }
    setLockAnswerLoader(false);
  },[activeQuestionData?.id, dispatch, pause, quiz?.id, selectedAnswer]);

  const handleQuit = async () => {
    await gameOverStatus(quiz.id, "quit");
    dispatch(quizActions.clearQuizSlice());
    navigate("/");
  };

  const useLifeline = async () => {
    if (activeLifeline) {
      dispatch(
        getLifeLineUsedThunk({
          gameId: quiz.id,
          questionId: activeQuestionData.id,
          lifeLineId: activeLifeline,
        })
      );
      handleClose();
    }
  };


  const lifeLineDescription = useMemo(() => {
    const data = lifeLineData?.find((e) => e.name === activeLifeline);
    return data?.description;
  }, [activeLifeline, lifeLineData]);



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
            {lifeLineData?.map((e) => (
              <li
                key={e.name}
                className={`${activeLifeline === e.name ? "active" : ""} ${e.used ? "used" : ""}`}
                onClick={() => {
                  if (!e.used) setActiveLifeline(e.name);
                }}
              >
                {e.name}
              </li>
            ))}
          </ul>
          {activeLifeline ?(<Box className="lifeline-description">
            <h3>About {activeLifeline}:</h3>
            <p>{lifeLineDescription}</p>
          </Box>): null}
          <button onClick={useLifeline}> Confirm </button>
        </Box>
      </Modal>
      <Box className="questions-container">
        <Box className="amount">
          <button onClick={handleQuit}>
            <IoMdExit />
            Quit{" "}
          </button>
          <ul>
            {amount.map((e, index) => (
              <li
                key={e}
                className={activeQuestionNumber === index ? "active" : ""}
              >
                <FaCoins />
                {e}
              </li>
            ))}
          </ul>
        </Box>
        {activeQuestionData ? (
          <Box className="question">
            <Box className="life-line">
              <h1>Question {15 - activeQuestionNumber}</h1>
              <button onClick={handleOpen}>Use Life Line</button>
            </Box>
            <h1 className="clock">{totalSeconds}</h1>
            <p className="question-text">{activeQuestionData.question}</p>
            <Box className="option">
              {activeQuestionData.options.map((option) => (
                <Box
                  onClick={() => handleSelectAnswer(option.id)}
                  className={`option-text ${option.id === selectedAnswer ? "selected" : ""}`}
                  key={option.id}
                >
                  {option.text}
                </Box>
              ))}
            </Box>
            {lifeLineStatus?.show ? (
              <Box className="lifelinebox">
                <div className="lifelinebox-header">
                  <p>{activeLifeline}</p>
                  <IoClose onClick={() => setActiveLifeline(null)} />
                </div>
                {lifeLineStatus.type === "AskExpert" ? (
                  <p className="lifelinebox-text">{lifeLineStatus.data}</p>
                ) : (
                  <Box className="audiencePoll">
                    {lifeLineStatus.data.map((e) => (
                      <Box className={"progress-container"} key={e.id}>
                        <span>{e.text}</span>
                        <LinearProgress
                          className="progress"
                          variant="determinate"
                          value={e.percentage * 100}
                        />
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ) : null}

            <Button className="lock-btn"
              onClick={lockAnswer}
              loading={lockAnswerLoader}
            >Lock Answer</Button>
          </Box>
        ) : questionStatus.isLoading ? (
          <Loader />
        ) : null}
      </Box>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="lifeline-box-modal">
          <h1>Game Over</h1>
          <p>You have won </p>
          <button onClick={navigate.bind(null, "/")}> Play Again </button>
        </Box>
      </Modal> */}
    </Box>
  );
};

export default Questions;
