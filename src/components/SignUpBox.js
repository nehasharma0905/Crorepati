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

{
  /**

correct way of taking input 
cosnt [username, setUsername] = useState("");


const handleInput = (arg) =>{ <-- here i'm getting the event user has triggered but I have to extract the value
  setUsername(arg.target.value)
}


const handleInputSimple = (arg) =>{ <-- here i'm getting correct value that user has typed
  setUsername(arg)
}



<input 
value={username}          <--- tells what value will the input going to contain or contains 
onChange={(inputEvent)=>{
  setUsername(inputEvent.target.value)
  OR
  handleInput(inputEvent)
  OR
  handleInputSimple(inputEvent.target.value) 


} <--- this is how you sets value to the state directly 
} 
placeholder={"Enter Username"} />



*/
}

{
  /**

onClick={()=>{}} <--- no argument needed
onChange={(argument)=>{}} <--- argument is needed

*/
}
