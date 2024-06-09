import { Box } from "@mui/material";
import { FaCoins } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "@mui/material/Modal";

const Questions = () => {
  const amount = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000,
    40000, 50000, 60000,
  ];
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
            <li>Flip Question</li>
            <li>50-50</li>
            <li>Audience Poll</li>
            <li>Ask Expert</li>
          </ul>
          <Box className="lifeline-description">
            <h3>About Life Lines</h3>
            <p>
              shdga dhgqf djqhwgruq d hqwr xasqjhr qghwefuq2 asd hqwgd
              asdsdvuqye dhjrgr addqhgr huewr
            </p>
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
                <p>Ask Expert</p>
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
            </Box>
          ) : null}

          <button className="lock-btn">Lock Answer</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
