import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Play = () => {
  const navigate = useNavigate();
  const nav = (link) => {
    navigate(link);
  };
  return (
    <div className="Play">
      <h1
        onClick={() => {
          nav("Login");
        }}
      >
        KBC
      </h1>
      <Button
        title="Play"
        navigate={() => {
          nav("login");
        }}
      />
      <Button
        title="LeaderBoard"
        navigate={() => {
          nav("leaderboard");
        }}
      />
      <Button
        title="Challenge"
        navigate={() => {
          nav("challenge");
        }}
      />
      <Button
        title="How to Play"
        navigate={() => {
          nav("Login");
        }}
      />
    </div>
  );
};
export default Play;
