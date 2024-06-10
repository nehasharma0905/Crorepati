import { Box } from "@mui/material";
import { FaCoins } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "@mui/material/Modal";
import LinearProgress from "@mui/material/LinearProgress";

const Questions = () => {
  const amount = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000,
    40000, 50000, 60000,
  ];
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
          <ul>
            {amount.map((e) => (
              <li>
                <FaCoins />
                {e}
              </li>
            ))}
          </ul>
        </Box>
        <Box className="question">
          <Box className="life-line">
            <h1>Question 6</h1>
            <button onClick={handleOpen}>Use Life Line</button>
          </Box>
          <h1 className="clock">00:45</h1>
          <p className="question-text">
            {" "}
            KJHG BUSINESS SERVICES LIMITED - Free company information from
            Companies House including registered office address, filing history,
            accounts, annual return, jsfhiwu sefbhwjn jadhwugf njfhiuqwgfn
            ajfgiuw
          </p>
          <Box className="option">
            <Box className="option-text">Event</Box>
            <Box className="option-text">Event</Box>
            <Box className="option-text">Event</Box>
            <Box className="option-text">Event</Box>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
