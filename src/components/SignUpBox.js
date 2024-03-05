const SignUpBox = (props) => {
  return (
    <div className="SignUpBox">
      <div className="Box">
        <p>{props.para}</p>

        <input
          value={props.username}
          onChange={(event) => props.takeInput("username", event.target.value)}
          placeholder={props.data1}
        />
        <input
          value={props.password}
          onChange={(event) => props.takeInput("password", event.target.value)}
          placeholder={props.data2}
        />
        {props.type == "SignUp" ? (
          <input
            value={props.confirmPassword}
            onChange={(event) =>
              props.takeInput("createpassword", event.target.value)
            }
            placeholder={props.data3}
          />
        ) : null}

        <button onClick={()=>props.buttonClicked()}>{props.title}</button>
        <p className="para1">{props.para1}</p>
        <p onClick={props.modeChange}>{props.para2}</p>
      </div>
    </div>
  );
};
export default SignUpBox;