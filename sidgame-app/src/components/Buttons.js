export default function Buttons(props) {
  return(<div>
    <button onClick={() => {
      props.setSelect("Hoffman");
      props.toggleMode();
      }}>Sid Hoffman</button>
    <button onClick={() => {
      props.setSelect("Frenchman");
      props.toggleMode()
      }}>Sid Frenchman</button>
    <br />
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.decreaseScore}>Decrease score</button>
    <button onClick={props.resetScore}>Reset score</button>
    <br />
    <button onClick={props.toggleMode}>Toggle mode</button>
  </div>)
};