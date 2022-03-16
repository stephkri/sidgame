export default function Result(props) {
  return (<div>
    <p>Here is the Result component</p>
    <p>Your selection: {props.select}</p>
    <button onClick={props.toggleMode}>Toggle mode</button>
    </div>)
};