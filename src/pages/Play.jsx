import { Box } from "@mui/material";
import coinImg from './../../public/assets/coin.png';
import { Button } from "@mui/joy";
const Play = () => {
  return (
    <Box className={'play-page'}>
      <img src={coinImg} alt="logo" className="logo" />
      <ul className={'all-options'}>
        <li>
          <Button className="play-button">Play</Button>
        </li>
        <li>
          <Button className="play-button">Leaderboard</Button>
        </li>
        <li>
          <Button className="play-button">Challenge a friend</Button>
        </li>
        <li>
          <Button className="play-button">Logout</Button>
        </li>
      </ul>

    </Box>
  );
};

export default Play;
