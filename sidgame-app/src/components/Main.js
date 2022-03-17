import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {
  const [resultMode, setResultMode] = useState(false);
  const [result, setResult] = useState({});

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

  const checkScoreResult = function(selected, generated) {
    return {
      lastName: generated,
      addPoint: selected === generated
    }
  }

  return(<div>
    {resultMode ?
    <Result
    toggleMode={toggleMode}
    result={result}
    resetScore={props.resetScore} />
    :
    <Buttons
    increaseScore={props.increaseScore}
    decreaseScore={props.decreaseScore}
    resetScore={props.resetScore}
    checkScoreResult={checkScoreResult}
    generateSid={generateSid}
    result={result}
    setResult={setResult}
    toggleMode={toggleMode} />}
    </div>)
};