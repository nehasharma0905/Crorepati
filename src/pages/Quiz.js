import { BsCurrencyRupee } from "react-icons/bs";
import { TbSwitch3 } from "react-icons/tb";
import { BsPersonVcardFill } from "react-icons/bs";
import Countdown from "react-countdown";
import {
  generateQuiz,
  lockAnswer,
  useLifeLine,
  useLifeLineAPI,
} from "../APIcalls/Authentication";
import { useContext, useEffect, useState } from "react";
import { Context } from "../components/context";
import { getQuestionByID } from "../APIcalls/Authentication";
import GameOverModal from "../components/GameOverModal";

const Quiz = () => {
  const amountWon = [
    1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000,
    1250000, 2500000, 5000000, 10000000, 70000000,
  ];
  const reversedArrayAmountWon = [...amountWon].reverse();
  const { username, quizData, setQuizData, setOpenGameOver } =
    useContext(Context);
  const [questionIdList, setQuestionIdList] = useState(null);
  const [count, setCount] = useState(0);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [lifeLineUsed, setLifeLineUsed] = useState({
    fifthy: {
      title: "50-50",
      used: false,
    },
    exchange: {
      title: "Exchange Question",
      used: false,
    },
    expert: {
      title: "Ask the Expert",
      used: false,
    },
  });

  const quizHandler = async () => {
    const { data } = await generateQuiz(username);
    console.log(data);
    setQuizData(data.data);
    setQuestionIdList([...data.data.questions]);
    // console.log("questionIdList", questionIdList);
  };

  const question = async (questionId) => {
    const { data } = await getQuestionByID(questionId);
    setQuestionData(data.data);
    // console.log("questionData", data);
  };

  const lockAns = async () => {
    const quizId = quizData.quizId;
    const questionId = questionIdList[count].questionId;
    const answerId = answer.id;
    const earnedScore = amountWon[count];
    // console.log("ans", answer);

    const { data } = await lockAnswer(
      quizId,
      questionId,
      answerId,
      earnedScore
    );
    if (data.data.isCorrect) {
      setCount(count + 1);
      setScore(amountWon[count]);
    } else {
      setOpenGameOver(true);
    }
  };
  const LifeLineUse = async (lifeLineType) => {
    const quizId = quizData.quizId;
    const questionId = questionIdList[count].questionId;

    const { data } = await useLifeLineAPI(quizId, questionId, lifeLineType);
    return data;
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
    // console.log("answer", e, e.text);
  };
  const lifeLineHandler = async (e) => {
    const temp = lifeLineUsed;
    if (e === "fifthy") {
      const fifty = await LifeLineUse(lifeLineUsed.fifthy.title);
      setQuestionData(fifty.data);
      temp.fifthy.used = true;
    } else if (e === "exchange") {
      const exchange = await LifeLineUse(lifeLineUsed.exchange.title);
      const temp1 = questionIdList;
      console.log(exchange, exchange.data);
      temp1[count].questionId = exchange.data._id;
      setQuestionIdList([...temp1]);
      setQuestionData(exchange.data);
      temp.exchange.used = true;
    } else if (e === "expert") {
      const expert = await LifeLineUse(lifeLineUsed.expert.title);
      console.log(expert);
      temp.expert.used = true;
    }
    setLifeLineUsed({ ...temp });
    console.log({ temp, e });
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
      <GameOverModal amount={score} />
      <div className="amount">
        {reversedArrayAmountWon.map((amount) => (
          <p>
            <BsCurrencyRupee />
            {amount}
          </p>
        ))}
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
          {questionData?.options?.map((option) => (
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
              Fifty-Fifty{" "}
              <button
                disabled={lifeLineUsed.fifthy.used}
                onClick={() => {
                  lifeLineHandler("fifthy");
                }}
              >
                50:50
              </button>
            </div>
          </li>

          <li>
            <div>
              Flip the question
              <button
                disabled={lifeLineUsed.exchange.used}
                onClick={() => lifeLineHandler("exchange")}
              >
                <TbSwitch3 />
              </button>
            </div>
          </li>
          <li>
            <div>
              Ask the Expert
              <button
                disabled={lifeLineUsed.expert.used}
                onClick={() => lifeLineHandler("expert")}
              >
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
