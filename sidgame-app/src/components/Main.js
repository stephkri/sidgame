import { useState } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

export default function Main(props) {

  /*
  The Main component is where the logic of the game happens.
  It has two sub-components only one of which is displayed at a time; the toggleMode function toggles the two.
  The Buttons component contains the two options: Sid Hoffman, or Sid Frenchman.
  Once one is selected, the mode goes to the Result component, which displays the randomly generated name
  and says whether the player has gained a point.

  The logic is stored inside the Main component; that way, everything is in one place,
  and only a total of three props need to be passed down between the two components.
  */

  // "resultMode" simply refers to whether the Main component is showing the Buttons or Result.
  const [resultMode, setResultMode] = useState(false);

  /*
  "result" is made to be shown by the Result component,
  and gets updated whenever the player makes a selection.
  The object contains a property saying which name (Hoffman or Frenchman) was randomly generated,
  as well as a property saying whether or not the player has gained a point.
  */
  const [result, setResult] = useState({});

  // This function is a shorthand to switch between Buttons and Result components.
  const toggleMode = function() {
    setResultMode(!resultMode);
  };

  /*
  With the help of Math.random(), this function generates a string,
  containing with random probability either "Hoffman" or "Frenchman".
  Since Math.random() makes a number between 0 and 1, the Math.round function is used to make
  an even split between the two.
  */
  const generateSid = function() {
    const rand = Math.random();
    if (Math.round(rand) === 0) {
      return "Hoffman";
    }
    return "Frenchman";
  };

  /*
  The two parameters of this function are the name which was selected by the player, and the name
  which was randomly generated by generateSid(). The generated name gets passed into the return object
  so it can be displayed in the Result component. addPoint is a boolean which determines whether the user gains a point;
  this is dependent on whether the player guessed the correct name.

  The addPoint boolean also determines what message the Result component will show:
  if true: "Congratulations! You gained a point."
  if false: "Sorry! You did not gain a point."
  */
  const checkScoreResult = function(selected, generated) {
    return {
      lastName: generated,
      addPoint: selected === generated
    }
  };

  // This is where it all comes together:
  const handleClick = function(name) {
    // "score" here is the object returned by checkSoreResult
    // This is also where the name is randomly generated
    const score = checkScoreResult(name, generateSid());
      // The "result" state is then set to this object, so it can be displayed in the Result component
      setResult(score);
      // If the two names match, and checkScoreResult determines that the player gets a point...
      if (score.addPoint) {
        // then call the increaseScore function, which increases the "score" state by 1
        props.increaseScore();
      }
      // Go to the Result component to see the result of the player's selection
      toggleMode();
  };

  return(<div>
    {resultMode ? <Result toggleMode={toggleMode} result={result} /> : <Buttons handleClick={handleClick} />}
    </div>);
};