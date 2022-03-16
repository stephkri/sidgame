import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {
  const [resultMode, setResultMode] = useState(false);
  const [select, setSelect] = useState("");

  const toggleMode = function() {
    setResultMode(!resultMode);
  };

  const resetSelect = function() {
    setSelect("");
  }

  const generateSid = function() {
    const rand = Math.random();
    if (Math.round(rand) === 0) {
      return "Hoffman";
    }
    return "Frenchman";
  };

  return(<div>
    {resultMode ? <Result toggleMode={toggleMode} /> : <Buttons
    increaseScore={props.increaseScore}
    decreaseScore={props.decreaseScore}
    resetScore={props.resetScore}
    select={select}
    setSelect={setSelect}
    toggleMode={toggleMode} />}
    </div>)
};