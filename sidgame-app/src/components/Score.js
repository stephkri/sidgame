export default function Score(props) {
  return(<div>
    <p>Here is the score: {props.score}</p>
    <button onClick={props.resetScore}>Reset score</button>
    </div>);
}