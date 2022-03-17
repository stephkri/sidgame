export default function Result(props) {
  return (<div>
    <h1>Sid {props.result.lastName}</h1>
    {props.result.addPoint ? <p>You gained a point</p> : <p>You did not gain a point</p>}
    <button onClick={props.toggleMode}>Toggle mode</button>
    </div>)
};