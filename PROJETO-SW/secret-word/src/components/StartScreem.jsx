import "./StartScreem.css";

const StartScreem = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar!</p>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
};

export default StartScreem;
