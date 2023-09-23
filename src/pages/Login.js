import { useState, useEffect } from "react";
import { createUser, loginUser } from "../APIcalls/Authentication";
import SignUpBox from "../components/SignUpBox";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../components/context";
const Login = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(Context);
  const [mode, setMode] = useState("Login");
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

  const handleLoginHandler = async () => {
    const { data } = await loginUser(username, password);
    if (data.authStatus) {
      navigate("/quiz");
    }
    console.log("data", data);
  };

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
          buttonClicked={handleLoginHandler}
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
