import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import './MedRec.css';
import fbIcon from '../Images/FB Icon.png';
import fbMessengerIcon from '../Images/FB Messenger Icon.png';
import igIcon from '../Images/IG Icon.png';
import ytIcon from '../Images/YT Icon.png';
import recruitment1 from '../Images/recruitment_1.png';
import recruitment2 from '../Images/recruitment_2.png';

const LazyImage = lazy(() => import('./LazyImage'));

const MedRec = () => {
  const location = useLocation();
  const recruitmentRef = useRef(null);

  useEffect(() => {
    if (location.hash === '#recruitment' && recruitmentRef.current) {
      recruitmentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="med-rec-container">
      <section id="media-section" className="media-section">
        <div className="content-container">
          <h1 className="section-title">MEDIA</h1>
        </div>
        <div className="media-icons">
          <a href="https://www.facebook.com/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <picture>
              <source srcSet={fbIcon.replace('.png', '.webp')} type="image/webp" />
              <img src={fbIcon} alt="Facebook" className="media-icon" />
            </picture>
          </a>
          <a href="https://m.me/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <picture>
              <source srcSet={fbMessengerIcon.replace('.png', '.webp')} type="image/webp" />
              <img src={fbMessengerIcon} alt="Messenger" className="media-icon" />
            </picture>
          </a>
          <a href="https://www.instagram.com/shamrocksrugby/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source srcSet={igIcon.replace('.png', '.webp')} type="image/webp" />
              <img src={igIcon} alt="Instagram" className="media-icon" />
            </picture>
          </a>
          <a href="https://www.youtube.com/channel/UC8Ke7di1wTGBBPMgIQ3Gy_A" target="_blank" rel="noopener noreferrer">
            <picture>
              <source srcSet={ytIcon.replace('.png', '.webp')} type="image/webp" />
              <img src={ytIcon} alt="YouTube" className="media-icon" />
            </picture>
          </a>
        </div>
      </section>

      <section id="recruiting-section" className="recruiting-section" ref={recruitmentRef}>
        <h1 className="recruiting-section-title">RECRUITMENT</h1>
        
        <Suspense fallback={<div className="recruiting-image" style={{height: '300px', background: '#ccc'}}>Loading image...</div>}>
          <picture>
            <source srcSet={recruitment1.replace('.png', '.webp')} type="image/webp" />
            <LazyImage src={recruitment1} alt="Recruiting Image 1" className="recruiting-image" />
          </picture>
        </Suspense>
        
        <div className="recruiting-content">
          {/* ... (content remains the same) ... */}
        </div>
        
        <Suspense fallback={<div className="recruiting-image" style={{height: '300px', background: '#ccc'}}>Loading image...</div>}>
          <picture>
            <source srcSet={recruitment2.replace('.png', '.webp')} type="image/webp" />
            <LazyImage src={recruitment2} alt="Recruiting Image 2" className="recruiting-image" />
          </picture>
        </Suspense>
      </section>
    </div>
  );
};

export default MedRec;