import React from 'react';
import './Footer.css';
import paavilainenLogo from '../Images/Paavilainen.png';
import uudenmaanLogo from '../Images/Uudenmaan.png';
import rocktapeLogo from '../Images/Rocktape.png';
import lindosLogo from '../Images/Lindos.png';
import artomikaLogo from '../Images/Artomika.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Proudly sponsored by:</h3>
        <div className="sponsor-images">
          <a href="https://www.uudenmaanlukko.fi/" target="_blank" rel="noopener noreferrer">
            <img src={paavilainenLogo} alt="Paavilainen" className="sponsor-image" />
          </a>
          <a href="https://www.uudenmaanlukko.fi/" target="_blank" rel="noopener noreferrer">
            <img src={uudenmaanLogo} alt="Uudenmaan" className="sponsor-image" />
          </a>
          <a href="https://www.rocktape.com" target="_blank" rel="noopener noreferrer">
            <img src={rocktapeLogo} alt="RockTape" className="sponsor-image" />
          </a>
          <a href="https://lindoselementit.fi/" target="_blank" rel="noopener noreferrer">
            <img src={lindosLogo} alt="Lindos" className="sponsor-image" />
          </a>
          <img src={artomikaLogo} alt="Artomika" className="sponsor-image" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;