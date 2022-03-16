import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {
  const [resultMode, setResultMode] = useState(false);

  const toggleMode = function() {
    setResultMode(!resultMode);
  }

  return(<div>
    {resultMode ? <Result /> : <Buttons
    increaseScore={props.increaseScore}
    decreaseScore={props.decreaseScore}
    resetScore={props.resetScore} />}
    <button onClick={toggleMode}>Toggle mode</button>
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.resetScore}>Reset score</button>
    </div>)
};