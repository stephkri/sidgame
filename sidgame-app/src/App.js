import { useState } from "react";
import './App.css';
import Main from './components/Main';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = function() {
    setScore(score + 1);
  };

  const resetScore = function() {
    setScore(0);
  };

  return (
    <div className="App">
        <p>
          <Main
          increaseScore={increaseScore} />
        </p>
        <p>
          <Score score={score} resetScore={resetScore} />
        </p>
    </div>
  );
}

export default App;
