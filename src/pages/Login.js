import { useState, useEffect } from "react";
import { createUser, loginUser } from "../APIcalls/Authentication";
import SignUpBox from "../components/SignUpBox";

const Login = () => {
  const [mode, setMode] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const readinput = (identifier, value) => {
    if (identifier == "username") {
      setUsername(value);
      console.log(value);
    } else if (identifier == "password") {
      setPassword(value);
      console.log(value);
    } else if (identifier == "createpassword") {
      setConfirmPassword(value);
      console.log(value);
    }
  };
  useEffect(() => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    console.log("useeffect run");
  }, [mode]);

  return (
    <div className="Login">
      <h1>KBC</h1>
      {mode == "Login" ? (
        <SignUpBox
          type="Login"
          para="Login to play"
          data1="Username"
          data2="Password"
          title="Login"
          para1="Don't have account?"
          para2="Click to create"
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          takeInput={readinput}
          buttonClicked={loginUser}
          modeChange={() => setMode("SignUp")}
        />
      ) : (
        <SignUpBox
          type="SignUp"
          para="Create account to play"
          data1="Username"
          data2="Password"
          data3="Confirm Password"
          title="Create"
          para1="Already have an account?"
          para2="Click to login"
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          takeInput={readinput}
          buttonClicked={createUser}
          modeChange={() => setMode("Login")}
        />
      )}
    </div>
  );
};
export default Login;
