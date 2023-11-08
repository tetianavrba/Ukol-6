import './style.css';

export const MainContentContainer = () => {
  return (
    <div className="dino-mino">
      <div className="dinosaur">
        <img src="/img/1.png" className="dino" alt="Dino"></img>
      </div>
      <div className="paws">
        <div className="paws-box">
          <h2>Táňa</h2>
          <img
            src="/img/paw-blue.png"
            className="paw-blue"
            alt="Step-purple"
          ></img>
        </div>
        <div className="paws-box">
          <h2>Týna</h2>
          <img
            src="/img/paw-green.png"
            className="paw-green"
            alt="Step-green"
          ></img>
        </div>
      </div>
    </div>
  );
};
