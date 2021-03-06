export default function Result(props) {
  return (<div>
    <h1>Sid {props.result.lastName}</h1>
    {props.result.addPoint ?
    <p className={"win-point"}>Congratulations! You gained a point.</p> :
    <p className={"lose-point"}>Sorry! You did not gain a point.</p>}
    <button onClick={props.toggleMode}>Next round</button>
    </div>)
};