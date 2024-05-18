import { Box } from "@mui/material";
const Login = () => {
  return (
    <Box className="login-page">
      <h1 className="login-text">Login to Play</h1>
      <input type="text" placeholder="Enter Username" className="login-input" />
      <input
        type="password"
        placeholder="Enter Password"
        className="login-input"
      />
      <p>Forgot Password?</p>
      <button className="LoginButton">Login</button>
      <p className="or">or</p>
      <button>
        <span>G</span>
        Login with Google
      </button>
      <p className="SignUp">
        Don't have an account? <span>Sign Up here</span>
      </p>
    </Box>
  );
};

export default Login;
