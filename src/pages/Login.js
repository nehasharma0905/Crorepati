import SignUpBox from "../components/SignUpBox";
import { useState } from "react";
const Login = () => {
  const [mode, setMode] = useState("Login");
  const [step, setStep] = useState(0);

  // SignUp Steps
  //  -> Take name and email, username
  // -> Verify OTP

  // Login Steps
  // -> Take username and password

  // If user click on Click to create -> setMode to signup
  // If user click on Click to Login -> setMode to login

  // I have to pass a fucntion
  // Components -> setMode("signup" | "login")
  //
  // We pass fucntion similarly as props
  //
  //
  // create a function that you will pass to title button
  // case 1 if mode is login -> console user authenticated
  // case 2 if mode is signup -> change step to 1
  // case 3 if mode is signup and step is 1 -> console user created
  //
  //
  //

  const buttonClicked = () => {
    if (mode == "Login") {
      console.log("User Authenticated");
    } else if (mode == "SignUp" && step == 0) {
      setStep(1);
    } else if (mode == "SignUp" && step == 1) {
      console.log("User Created");
    }
  };
  return (
    <div className="Login">
      <h1>KBC</h1>
      {mode == "Login" ? (
        <SignUpBox
          type="Login"
          para="Login to play"
          data2="Username"
          data3="Password"
          title="Login"
          para1="Don't have account?"
          para2="Click to create"
          buttonClicked={buttonClicked}
          modeChange={() => setMode("SignUp")}
        />
      ) : step == 0 ? (
        <SignUpBox
          type="SignUp"
          para="Create account to play"
          data1="Email"
          data2="Username"
          data3="Password"
          title="Create"
          para1="Already have an account?"
          para2="Click to login"
          buttonClicked={buttonClicked}
          modeChange={() => setMode("Login")}
        />
      ) : (
        <SignUpBox
          type="OTP"
          para="Create account to play"
          otpPara=<span>
            A verification OTP has been sent to your <br />
            registered email. Please enter the OTP.
          </span>
          data3="OTP"
          title="Submit"
          para1="Already have an account?"
          para2="Click to login"
          buttonClicked={buttonClicked}
          modeChange={() => setMode("Login")}
        />
      )}
    </div>
  );
};
export default Login;
