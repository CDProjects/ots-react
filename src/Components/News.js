import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load Facebook SDK
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      
        // Force re-parse of Facebook elements and set loading to false when done
        const checkFbLoaded = setInterval(() => {
            if (window.FB) {
                window.FB.XFBML.parse();
                setIsLoading(false);
                clearInterval(checkFbLoaded);
            }
        }, 1000);

        return () => clearInterval(checkFbLoaded);
    }, []);

    return (
        <div className="news-section">
            <h1>NEWS</h1>
            {isLoading && <div className="spinner"></div>}
            <div className={`fb-page-container ${isLoading ? 'hidden' : ''}`}>
                <div 
                    className="fb-page" 
                    data-href="https://www.facebook.com/OldTownShamrocks/" 
                    data-tabs="timeline" 
                    data-width="" // Remove fixed width
                    data-height="" 
                    data-small-header="false" 
                    data-adapt-container-width="true" 
                    data-hide-cover="false" 
                    data-show-facepile="true"
                >
                    <blockquote 
                        cite="https://www.facebook.com/OldTownShamrocks/" 
                        className="fb-xfbml-parse-ignore"
                    >
                        <a href="https://www.facebook.com/OldTownShamrocks/">
                            Old Town Shamrocks Porvoo
                        </a>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default News;