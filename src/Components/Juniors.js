import React from 'react';
import './Juniors.css';
import juniorsImage1 from '../Images/Juniors 1.png';
import juniorsImage2 from '../Images/Juniors 2.png';
import juniorsImage3 from '../Images/Juniors 3.png';

const Juniors = () => {
    return (
      <section id="juniors-section" className="juniors-section">
        <div id="juniors-marker"></div>
        <div className="content-container">
          <h1 className="section-title">JUNIORS</h1>
        </div>
        <div className="new-images-wrapper">
          <img src={juniorsImage2} alt="Juniors Picture 2" className="juniors-image hidden-on-mobile" />
          <img src={juniorsImage3} alt="Juniors Picture 3" className="juniors-image hidden-on-mobile" />
        </div>
        <div className="juniors-content-group">
          <div className="juniors-picture-wrapper">
            <img src={juniorsImage1} alt="Juniors Picture" className="juniors-picture" />
          </div>
          <div className="content-container">
            <p>
              Juniorit treenaavat tiistaisin hamarin nurmella Klo 18.30-19.30<br />
              Juniori rugbyä on jatkettu. Otamme avoimin käsin vastaan kaikki nuoret ja lajista kiinnostuneet mukaan.
              Tällä hetkellä seura kaavaile jo ensimmäisiä pelejä junioreille. Jos olet kiinnostunut, otathan yhteyttä suomeksi
              numeroon +358408326626 Juniori koordinaattori/valmentaja ja ruotsiksi +358401930772 apuvalmentaja.<br />
              JUNIORIT PELAAVAT MYÖS MATSEJA YMPÄRI VUODEN
            </p>
            <p className="juniors-english">
              Juniors train on Tuesdays at Kokon Grass Pitch from 18.30-19.30<br />
              Junior rugby has been resumed. We welcome with open arms all youngsters and those interested in the sport. At the moment the club is already planning the first games for juniors. If you are interested, please contact us in Finnish at +358408326626 Junior coordinator/coach and in Swedish at +358401930772 assistant coach.
              <br />JUNIORS ALSO PLAY MATCHES ALL YEAR ROUND
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Juniors;