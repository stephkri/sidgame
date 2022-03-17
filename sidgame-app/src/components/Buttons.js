export default function Buttons(props) {
  return(<div>
    <p>What will I say next?</p>
    <button onClick={() => {
      const score = props.checkScoreResult("Hoffman", props.generateSid());
      props.setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      props.toggleMode();
      }}>Sid Hoffman</button>
    <br />
    <button onClick={() => {
      const score = props.checkScoreResult("Frenchman", props.generateSid());
      props.setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      props.toggleMode()
      }}>Sid Frenchman</button>
  </div>)
};