import { useState } from "react";
import './App.css';
import Main from './components/Main';
import Score from './components/Score';

function App() {
  // This is the game score, which is increased when the player guesses correctly.
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
