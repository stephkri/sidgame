import { useState } from "react";

export default function Main(props) {
  const [scoreMode, setScoreMode] = useState(false);

  const toggleMode = function() {
    setScoreMode(!scoreMode);
  }

  return(<div>
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.resetScore}>Reset score</button>
    </div>)
};