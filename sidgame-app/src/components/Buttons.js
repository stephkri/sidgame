export default function Buttons(props) {
  /*
  const handleClick = function(name) {
    const score = props.checkScoreResult(name, props.generateSid());
      props.setResult(score);
      if (score.addPoint) {
        props.increaseScore();
      }
      console.log(score);
      props.toggleMode();
  };
  */

  return(<div>
    <p>What will I say next?</p>
    <button className={"sid-button"} onClick={() => { props.handleClick("Hoffman"); }}>Sid Hoffman</button>
    <br />
    <button className={"sid-button"} onClick={() => { props.handleClick("Frenchman"); }}>Sid Frenchman</button>
  </div>)
};