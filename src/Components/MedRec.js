import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import './MedRec.css';
import fbIcon from '../Images/FB Icon.png';
import fbMessengerIcon from '../Images/FB Messenger Icon.png';
import igIcon from '../Images/IG Icon.png';
import ytIcon from '../Images/YT Icon.png';

// Lazy load the larger images
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
            <img src={fbIcon} alt="Facebook" className="media-icon" />
          </a>
          <a href="https://m.me/OldTownShamrocks" target="_blank" rel="noopener noreferrer">
            <img src={fbMessengerIcon} alt="Messenger" className="media-icon" />
          </a>
          <a href="https://www.instagram.com/shamrocksrugby/" target="_blank" rel="noopener noreferrer">
            <img src={igIcon} alt="Instagram" className="media-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UC8Ke7di1wTGBBPMgIQ3Gy_A" target="_blank" rel="noopener noreferrer">
            <img src={ytIcon} alt="YouTube" className="media-icon" />
          </a>
        </div>
      </section>

      <section id="recruiting-section" className="recruiting-section" ref={recruitmentRef}>
        <h1 className="recruiting-section-title">RECRUITMENT</h1>
        
        <Suspense fallback={<div>Loading image...</div>}>
          <LazyImage src={require('../Images/recruitment_1.png')} alt="Recruiting Image 1" className="recruiting-image" />
        </Suspense>
        
        <div className="recruiting-content">
          {/* ... (rest of the content remains the same) ... */}
        </div>
        
        <Suspense fallback={<div>Loading image...</div>}>
          <LazyImage src={require('../Images/recruitment_2.png')} alt="Recruiting Image 2" className="recruiting-image" />
        </Suspense>
      </section>
    </div>
  );
};

export default MedRec;