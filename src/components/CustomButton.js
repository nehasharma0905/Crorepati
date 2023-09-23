const Button = (props) => {
  return (
    <div className="Button">
      <button onClick={props.navigate}>{props.title}</button>
    </div>
  );
};
export default Button;
