export default function Score(props) {
  return(<div>
    <h3>Your score: {props.score}</h3>
    <button onClick={props.resetScore}>Reset score</button>
    </div>);
}