const SignUpBox = (props) => {
  return (
    <div className="SignUpBox">
      <div className="Box">
        <p>{props.para}</p>
        {props.type == "OTP" ? (
          <p className="otpPara">{props.otpPara}</p>
        ) : null}
        {props.type == "SignUp" ? <input placeholder={props.data1} /> : null}
        {props.type == "SignUp" || props.type == "Login" ? (
          <input placeholder={props.data2} />
        ) : null}
        <input placeholder={props.data3} />
        <button>{props.title}</button>
        <p className="para1">{props.para1}</p>
        <a>{props.para2}</a>
      </div>
    </div>
  );
};
export default SignUpBox;
