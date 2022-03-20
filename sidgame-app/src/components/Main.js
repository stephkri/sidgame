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
  };

  const handleClick = function(name) {
    const score = checkScoreResult(name, generateSid());
      setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      toggleMode();
  };

  return(<div>
    {resultMode ? <Result toggleMode={toggleMode} result={result} /> : <Buttons handleClick={handleClick} />}
    </div>);
};