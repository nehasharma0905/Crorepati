import { Box, Button } from "@mui/material";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import {useSelector, useDispatch} from "react-redux";
import { usersAction } from "../redux/userSlice";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  /**
   * How to access redux state
   * Step 1: import useSelector from react-redux
   * import {useSelector} from "react-redux";
   * 
   * Step 2: use useSelector
   * const { userObject } = useSelector((state) => state.users);
   * 
   * Step 3: using userObject
   * 
   * 
   * Step 4: update state
   * Step 4.1
   * import useDispatch from react-redux
   * import { useDispatch } from "react-redux";
   * now create a dispatch variable
   * const dispatch = useDispatch();
   * 
   * Step 4.2 use dispatch with action
   * 
   */

  const { userObject } = useSelector((state) => state.users);

  console.log("userObject", userObject);

  const dispatch = useDispatch();

  const handleUserObject = () => {
   
    dispatch(usersAction.updateUserObject({
      name: "Neha",
    }))
  }
  const handleUserObjectAge = () => {
    dispatch(usersAction.addAge(30));
  }

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
      <Button onClick={handleUserObject}>Mera button</Button>
      <Button onClick={handleUserObjectAge}>Mera button 2</Button>
      <h1>Name: {userObject?.name} {userObject?.age}</h1>
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
