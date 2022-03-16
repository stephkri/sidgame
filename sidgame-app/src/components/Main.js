import { useState } from "react";

export default function Main(props) {
  const [resultMode, setResultMode] = useState(false);

  const toggleMode = function() {
    setResultMode(!resultMode);
  }

  return(<div>
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.resetScore}>Reset score</button>
    </div>)
};