// FacebookPageWrapper.js
import React, { useEffect, useRef } from 'react';

const FacebookPageWrapper = ({ fbPageUrl, tabs, width, height }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(containerRef.current);
    } else {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        window.FB.init({
          xfbml: true,
          version: 'v11.0'
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <div 
        className="fb-page" 
        data-href={fbPageUrl}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote cite={fbPageUrl} className="fb-xfbml-parse-ignore">
          <a href={fbPageUrl}>Old Town Shamrocks Porvoo</a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookPageWrapper;