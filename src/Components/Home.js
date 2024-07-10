import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Import all images
import akseli from "../Images/Akseli 1.png";
import ale from "../Images/Ale 1.png";
import ari from "../Images/Ari GV1.png";
import glenn from "../Images/Glenn 1.png";
import jaska from "../Images/Jaska 1.png";
import jay from "../Images/Jay 1.png";
import jemi from "../Images/Jemi 1.png";
import jim from "../Images/Jim 1.png";
import linus from "../Images/Linus 1.png";
import juri from "../Images/Juri 1.png";
import juuso from "../Images/Juuso 1.png";
import markus from "../Images/Markus 1.png";
import niko from "../Images/Niko 1.png";
import petu from "../Images/Petu 1.png";
import samu from "../Images/Samu 1.png";
import stefu from "../Images/Stefu 1.png";
import taras from "../Images/Taras 1.png";
import tommi from "../Images/Tommi 1.png";
import tommiP from "../Images/Tommi P 1.png";
import tuomas from "../Images/Tuomas 1.png";

// Lazy load image component
const LazyImage = lazy(() => import('./LazyImage'));

const images = [
  { src: akseli, alt: "Akseli" },
  { src: ale, alt: "Ale" },
  { src: ari, alt: "Ari" },
  { src: glenn, alt: "Glenn" },
  { src: jaska, alt: "Jaska" },
  { src: jay, alt: "Jay" },
  { src: jemi, alt: "Jemi" },
  { src: jim, alt: "Jim" },
  { src: linus, alt: "Linus" },
  { src: juri, alt: "Juri" },
  { src: juuso, alt: "Juuso" },
  { src: markus, alt: "Markus" },
  { src: niko, alt: "Niko" },
  { src: petu, alt: "Petu" },
  { src: samu, alt: "Samu" },
  { src: stefu, alt: "Stefu" },
  { src: taras, alt: "Taras" },
  { src: tommi, alt: "Tommi" },
  { src: tommiP, alt: "Tommi P" },
  { src: tuomas, alt: "Tuomas" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("home-page");
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => {
      clearInterval(interval);
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <section id="home" className="home-section">
      <div id="home-marker"></div>
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            >
              <Suspense fallback={<div className="image-placeholder">Loading...</div>}>
                <LazyImage src={image.src} alt={image.alt} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
      <div className="home-content">
        <div className="content-wrapper">
          <h1 className="home-title">#wearerecruiting</h1>
          <p className="home-paragraph">
            We are on the hunt for new people and players of <br />
            all sizes to join our club - No experience needed!
          </p>
          <Link to="/media-recruitment#recruitment" className="about-us-btn">
            MORE ABOUT THIS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;