import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {
  const [resultMode, setResultMode] = useState(false);

  const toggleMode = function() {
    setResultMode(!resultMode);
  };

  const generateSid = function() {
    const rand = Math.random();
    if (Math.round(rand) === 0) {
      return "Hoffman";
    }
    return "Frenchman";
  };

  return(<div>
    {resultMode ? <Result /> : <Buttons
    increaseScore={props.increaseScore}
    decreaseScore={props.decreaseScore}
    resetScore={props.resetScore} />}
    <button onClick={toggleMode}>Toggle mode</button>
    </div>)
};