export default function Buttons(props) {
  return(<div>
    <br />
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.decreaseScore}>Decrease score</button>
    <button onClick={props.resetScore}>Reset score</button>
  </div>)
};