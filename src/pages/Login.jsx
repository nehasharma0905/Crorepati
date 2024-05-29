import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { usersAction } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { testThunk } from "../redux/userThunk";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  // const isLoggedIn = useMemo(async () => {
  //   const user = await auth.currentUser;
  //   if (user) return true;
  //   else false;
  // }, [auth]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(testThunk());
  //   }
  // }, [isLoggedIn]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("/");

  const handleInput = (identifier, event) => {
    setForm({
      ...form,
      [identifier]: event.target.value,
    });
  };
  const handleSignUp = async () => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("user", user);
      if (user.accessToken) {
        console.log("user", user);
        dispatch(
          usersAction.updateLoginStatus({
            isLoggedIn: true,
            user: user,
          })
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 500);
      } else {
        console.log("error", user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignIn = async () => {
    try {
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("user", user);
      if (user.accessToken) {
        dispatch(
          usersAction.updateLoginStatus({
            isLoggedIn: true,
            user: user,
          })
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 500);
      } else {
        console.log("error", user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("result", result);
      console.log("user", result.user);
      if (result.user.accessToken) {
        dispatch(
          usersAction.updateLoginStatus({
            isLoggedIn: true,
            user: result.user,
          })
        );
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 500);
      } else {
        console.log("error", result.user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box className="login-page">
      <h1 className="login-text">{isLogin ? "Login" : "Sign Up"} to Play</h1>
      <Box className={"login-container"}>
        <Button onClick={() => dispatch(testThunk())}>Test</Button>
        {isLogin ? null : (
          <Box className={"input-container"}>
            <label>User Name</label>
            <input
              value={form.name}
              type="text"
              placeholder="Enter Name"
              className="login-input"
              onChange={(event) => handleInput("name", event)}
            />
          </Box>
        )}

        <Box className={"input-container"}>
          <label>Email</label>
          <input
            value={form.email}
            type="text"
            placeholder="Enter Email"
            className="login-input"
            onChange={(event) => handleInput("email", event)}
          />
        </Box>
        <Box className={"input-container"}>
          <label>Password</label>
          <input
            value={form.password}
            type="password"
            placeholder="Enter Password"
            className="login-input"
            onChange={(event) => handleInput("password", event)}
          />
        </Box>
        {isLogin ? null : (
          <Box className={"input-container"}>
            <label>Confirm Password</label>
            <input
              value={form.confirmPassword}
              type="password"
              placeholder="Confirm Password"
              className="login-input"
              onChange={(event) => handleInput("confirmPassword", event)}
            />
          </Box>
        )}

        <p className="forgot-password">Forgot Password?</p>
        {isLogin ? (
          <Button
            className="LoginButton"
            onClick={handleSignIn}
            loading={loading}
          >
            Login
          </Button>
        ) : (
          <Button
            className="LoginButton"
            onClick={handleSignUp}
            loading={loading}
          >
            SignUp
          </Button>
        )}
        <p className="or">or</p>
        <Button className="google-btn" onClick={signInWithGoogle}>
          <FcGoogle />
          Login with Google
        </Button>
        {isLogin ? (
          <p className="SignUp">
            Don&apos;t have an account?{" "}
            <span onClick={() => setIsLogin(false)}>Sign Up here</span>
          </p>
        ) : (
          <p className="SignUp">
            Already have an account?{" "}
            <span onClick={() => setIsLogin(true)}>Sign In here</span>
          </p>
        )}
      </Box>
    </Box>
  );
};

export default Login;
