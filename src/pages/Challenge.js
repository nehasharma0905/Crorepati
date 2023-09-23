import SignUpBox from "../components/SignUpBox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

// If we are getting give/challenge in url, then show state 0
// If we are getting take/challenge in url, then set state to 1
//
const Challenge = () => {
  const [giveChallenge, setGiveChallange] = useState(0);
  const hook = useLocation();
  const [name, setName] = useState("");
  // console.log(hook);

  const checkurl = () => {
    const parsed = queryString.parse(hook.search);
    console.log(parsed);
    if (parsed.mode == "take") {
      setGiveChallange(1);
      setName(parsed.invite);
    } else {
      setGiveChallange(0);
    }
  };

  useEffect(() => {
    checkurl();
  }, []);

  return (
    <div className="Challenge">
      <h1 onClick={checkurl}>KBC</h1>

      {giveChallenge == 0 ? (
        <SignUpBox
          type="OTP"
          para="Challenge anyone to play"
          otpPara="Copy the link below and share it with your friends"
          data3="link"
          title="Click to copy"
        />
      ) : (
        <div className="challengebox">
          <p className="para1">You have been challenged</p>
          <p className="para2">{name} has challenged you to play</p>
          <button>Accept</button>
          <button>Reject</button>
        </div>
      )}
    </div>
  );
};
export default Challenge;
