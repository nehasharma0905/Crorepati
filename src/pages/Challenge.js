import SignUpBox from "../components/SignUpBox";
import Button from "../components/Button";
const Challenge = () => {
  return (
    <div className="Challenge">
      <h1>KBC</h1>
      <SignUpBox
        type="OTP"
        para="Challenge anyone to play"
        otpPara="Copy the link below and share it with your friends"
        data3="link"
        title="Click to copy"
      />
      <div className="challengebox">
        <p className="para1">You have been challenged</p>
        <p className="para2">Anshul has challenged you to play</p>
        <button>Accept</button>
        <button>Reject</button>
      </div>
    </div>
  );
};
export default Challenge;
