import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Main from './components/Main';
import Score from './components/Score';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Main setScore={setScore} />
        </p>
        <p>
          <Score score={score} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
