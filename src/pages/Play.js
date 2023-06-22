import Button from "../components/Button";
import { Link } from "react-router-dom";
const Play = () => {
  return (
    <div className="Play">
      <h1>KBC</h1>
      <Link to="/Login">Login</Link>
      <Button title="Play" />
      <Button title="LeaderBoard" />
      <Button title="Challenge" />
      <Button title="How to Play" />
    </div>
  );
};
export default Play;
