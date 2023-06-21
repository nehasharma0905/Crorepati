import SignUpBox from "../components/SignUpBox";
const Login = () => {
  return (
    <div className="Login">
      <h1>KBC</h1>
      <SignUpBox
        type="SignUp"
        para="Create account to play"
        data1="Email"
        data2="Username"
        data3="Password"
        title="Create"
        para1="Already have an account?"
        para2="Click to login"
      />
      <SignUpBox
        type="Login"
        para="Login to play"
        data2="Username"
        data3="Password"
        title="Login"
        para1="Don't have account?"
        para2="Click to create"
      />
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
      />
    </div>
  );
};
export default Login;
