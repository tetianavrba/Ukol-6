import './style.css';
import { Link, Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="headding">
        <h1 className="muj-den">Můj skvělý den!!!</h1>
        <p className="text">
          Ahoj, jsem Dino-Mino, a spolu se mnou se budeš učit a bavit při
          plánování tvého dne.
        </p>
      </div>
      <div className="dino-mino">
        <div className="dinosaur">
          <img src="/img/1.png" className="dino" alt="Dino"></img>
        </div>
        <div className="paws">
          <div className="paws-box">
            <Link to="/TanaPage">
              <h2>Táňa</h2>
              <img
                src="/img/paw-blue.png"
                className="paw-blue"
                alt="Step-purple"
              ></img>{' '}
            </Link>
          </div>

          <div className="paws-box">
            <Link to="/TynaPage">
              <h2>Týna</h2>
              <img
                src="/img/paw-green.png"
                className="paw-green"
                alt="Step-green"
              ></img>{' '}
            </Link>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};
