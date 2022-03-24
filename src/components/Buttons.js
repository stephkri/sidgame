export default function Buttons(props) {

  return(<div>
    <p>What will I say next?</p>
    <button className={"sid-button"} onClick={() => { props.handleClick("Hoffman"); }}>Sid Hoffman</button>
    <br />
    <button className={"sid-button"} onClick={() => { props.handleClick("Frenchman"); }}>Sid Frenchman</button>
  </div>)
};