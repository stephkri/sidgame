import { useState } from "react";
import './App.css';
import Main from './components/Main';
import Score from './components/Score';

function App() {
  /*
  This is the game score, which is increased when the player guesses correctly.
  The game functionality is in the Main component, so increaseScore is needed
  to handle the click of the two option buttons. The actual showing of the score is done
  in the Score component, which has an option to reset the player's score to zero.
  */
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
