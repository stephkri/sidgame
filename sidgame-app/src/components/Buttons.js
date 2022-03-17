export default function Buttons(props) {
  return(<div>
    <button onClick={() => {
      // props.setSelect("Hoffman");
      const score = props.checkScoreResult("Hoffman", props.generateSid());
      props.setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      props.toggleMode();
      }}>Sid Hoffman</button>
    <button onClick={() => {
      // props.setSelect("Frenchman");
      const score = props.checkScoreResult("Frenchman", props.generateSid());
      props.setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      props.toggleMode()
      }}>Sid Frenchman</button>
    <br />
    <button onClick={props.increaseScore}>Increase score</button>
    <button onClick={props.decreaseScore}>Decrease score</button>
    <button onClick={props.resetScore}>Reset score</button>
    <br />
    <button onClick={props.toggleMode}>Toggle mode</button>
  </div>)
};