export default function Main(props) {
  return(<div>
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.resetScore}>Reset score</button>
    </div>)
};