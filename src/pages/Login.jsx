import { Box } from "@mui/material";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInput = (identifier, event) => {
    setForm({
      ...form,
      [identifier]: event.target.value,
    });
  };
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignOut = async () => {
    await signOut(auth);
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log("result", result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box className="login-page">
      <h1 className="login-text">{isLogin ? "Login" : "Sign Up"} to Play</h1>
      {isLogin ? null : (
        <input
          value={form.name}
          type="text"
          placeholder="Enter Name"
          className="login-input"
          onChange={(event) => handleInput("name", event)}
        />
      )}
      <input
        value={form.email}
        type="text"
        placeholder="Enter email"
        className="login-input"
        onChange={(event) => handleInput("email", event)}
      />
      <input
        value={form.password}
        type="password"
        placeholder="Enter Password"
        className="login-input"
        onChange={(event) => handleInput("password", event)}
      />
      {isLogin ? null : (
        <input
          value={form.confirmPassword}
          type="password"
          placeholder="Confirm Password"
          className="login-input"
          onChange={(event) => handleInput("confirmPassword", event)}
        />
      )}

      <p>Forgot Password?</p>
      {isLogin ? (
        <button className="LoginButton" onClick={handleSignIn}>
          Login
        </button>
      ) : (
        <button className="LoginButton" onClick={handleSignUp}>
          SignUp
        </button>
      )}
      <p className="or">or</p>
      <button>
        <span>G</span>
        Login with Google
      </button>
      {isLogin ? (
        <p className="SignUp">
          Don't have an account?{" "}
          <span onClick={() => setIsLogin(false)}>Sign Up here</span>
        </p>
      ) : (
        <p className="SignUp">
          Already have an account?{" "}
          <span onClick={() => setIsLogin(true)}>Sign In here</span>
        </p>
      )}
    </Box>
  );
};

export default Login;
