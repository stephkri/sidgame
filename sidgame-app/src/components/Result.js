export default function Result(props) {
  return (<div>
    <p>Here is the Result component</p>
    <p>Your selection: {props.select}</p>
    <p>The result: {props.result.lastName}</p>
    {props.result.addPoint ? <p>You gained a point</p> : <p>You did not gain a point</p>}
    <button onClick={props.toggleMode}>Toggle mode</button>
    </div>)
};