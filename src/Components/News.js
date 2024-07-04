import React, { useEffect } from 'react';
import './News.css'; // Adjust the path based on your project structure

const News = () => {
  useEffect(() => {
    // Ensure FB SDK is loaded
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="news-section">
      <h1>Latest News</h1>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/OldTownShamrocks"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/OldTownShamrocks"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/OldTownShamrocks">Facebook Page</a>
        </blockquote>
      </div>
    </div>
  );
};

export default News;
