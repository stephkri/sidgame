import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {

  // "resultMode" simply refers to whether the Main component is showing the Buttons or Result.
  const [resultMode, setResultMode] = useState(false);
  /*
  "result" is made to be shown by the Result component,
  and gets updated whenever the player makes a selection.
  The object contains a property saying which name (Hoffman or Frenchman) was selected by the player,
  as well as a property saying whether or not the player has gained a point.
  */
  const [result, setResult] = useState({});

  // This function is a shorthand to switch between Buttons and Result components.
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