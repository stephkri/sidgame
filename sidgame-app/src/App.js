import { useState } from "react";
import './App.css';
import Main from './components/Main';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = function() {
    setScore(score + 1);
  };

  const decreaseScore = function() {
    setScore(score - 1);
  };

  const resetScore = function() {
    setScore(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Main
          increaseScore={increaseScore}
          decreaseScore={decreaseScore}
          resetScore={resetScore} />
        </p>
        <p>
          <Score score={score} />
        </p>
      </header>
    </div>
  );
}

export default App;
