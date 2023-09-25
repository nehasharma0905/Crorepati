import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "./context";
import { useContext } from "react";
import GameOverImage from "../Data/GameOverImage.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const handleRefresh = () => {
  window.location.reload();
};

export default function GameOverModal() {
  const { openGameOver, setOpenGameOver } = useContext(Context);
  //   const handleClose = () => setOpenGameOver(false);

  return (
    <Modal
      className="modal"
      open={openGameOver}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="gameoverbox" sx={style}>
        <img className="gameoverimage" src={GameOverImage} />

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You have won X.
        </Typography>
        <button onClick={handleRefresh}>Restart</button>
      </Box>
    </Modal>
  );
}
