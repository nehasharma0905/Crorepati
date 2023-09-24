import { BsCurrencyRupee } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { TbSwitch3 } from "react-icons/tb";
import { BsPersonVcardFill } from "react-icons/bs";
import Countdown from "react-countdown";
import { generateQuiz, lockAnswer } from "../APIcalls/Authentication";
import { useContext, useEffect, useState } from "react";
import { Context } from "../components/context";
import { getQuestionByID } from "../APIcalls/Authentication";
import GameOverModal from "../components/GameOverModal";

const Quiz = () => {
  const amountWon = [
    1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000,
    1250000, 2500000, 5000000, 10000000, 70000000,
  ];
  const { username, quizData, setQuizData, setOpenGameOver } =
    useContext(Context);
  const [questionIdList, setQuestionIdList] = useState(null);
  const [count, setCount] = useState(0);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(true);
  const quizHandler = async () => {
    const { data } = await generateQuiz(username);
    console.log(data);
    setQuizData(data.data);
    setQuestionIdList([...data.data.questions]);
    console.log("questionIdList", questionIdList);
  };

  const question = async (questionId) => {
    const { data } = await getQuestionByID(questionId);
    setQuestionData(data.data);
    console.log("questionData", data);
  };

  const lockAns = async () => {
    const quizId = quizData.quizId;
    const questionId = questionIdList[count].questionId;
    const answerId = answer.id;
    const earnedScore = 10;
    console.log("ans", answer);

    const { data } = await lockAnswer(
      quizId,
      questionId,
      answerId,
      earnedScore
    );
    if (data.data.isCorrect) {
      setCount(count + 1);
      setScore(data.data.totalScore);
    } else {
      setGameState(false);
      setOpenGameOver(true);
    }
  };
  // Random component
  const Completionist = () => <span>Game Over!</span>;

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  const setAnswerHandler = (e) => {
    setAnswer(e);
    console.log("answer", e, e.text);
  };
  useEffect(() => {
    quizHandler();
  }, []);

  useEffect(() => {
    if (questionIdList !== null && count < questionIdList.length) {
      question(questionIdList[count].questionId);
    }
  }, [count, questionIdList]);

  return (
    <div className="Quiz">
      <GameOverModal />
      <div className="amount">
        <p>
          <BsCurrencyRupee />
          100000000
        </p>
        <p>
          <BsCurrencyRupee />
          80000000
        </p>
        <p>
          <BsCurrencyRupee />
          40000000
        </p>
        <p>
          <BsCurrencyRupee />
          20000000
        </p>
        <p>
          <BsCurrencyRupee />
          10000000
        </p>
        <p>
          <BsCurrencyRupee />
          5000000
        </p>
        <p>
          <BsCurrencyRupee />
          2500000
        </p>
        <p>
          <BsCurrencyRupee />
          1250000
        </p>
        <p>
          <BsCurrencyRupee />
          640000
        </p>
        <p>
          <BsCurrencyRupee />
          320000
        </p>
        <p>
          <BsCurrencyRupee />
          160000
        </p>
        <p>
          <BsCurrencyRupee />
          80000
        </p>
        <p>
          <BsCurrencyRupee />
          40000
        </p>
        <p>
          <BsCurrencyRupee />
          20000
        </p>
        <p>
          <BsCurrencyRupee />
          10000
        </p>
        <p>
          <BsCurrencyRupee />
          5000
        </p>
      </div>
      <div className="question">
        <div className="questionNo">
          <p>Question {count + 1}</p>
          <div>
            <Countdown
              date={Date.now() + 30000}
              renderer={renderer}
              onComplete={() => {
                setOpenGameOver(true);
              }}
            />
          </div>
        </div>
        <p className="ques">{questionData?.question}</p>
        <div className="option">
          {questionData?.options.map((option) => (
            <div
              className={`${answer?.id === option.id ? "active" : ""}`}
              onClick={() => setAnswerHandler(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
        <div className="buton">
          <button>Quit</button>
          <button onClick={lockAns}>Lock Answer</button>
        </div>
      </div>
      <div className="options">
        <p>Life Lines</p>
        <ul>
          <li>
            <div>
              Fifty-Fifty <button>50:50</button>
            </div>
          </li>

          <li>
            <div>
              Flip the question
              <button>
                <TbSwitch3 />
              </button>
            </div>
          </li>
          <li>
            <div>
              Ask the Expert
              <button>
                <BsPersonVcardFill />
              </button>
            </div>
          </li>
        </ul>

        <h2>You have currently won</h2>
        <h1>
          <BsCurrencyRupee />
          {score}
        </h1>
      </div>
    </div>
  );
};
export default Quiz;
