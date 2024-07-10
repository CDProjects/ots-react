// News.js
import React, { useState, useEffect } from 'react';
import './News.css';
import FacebookPageWrapper from './FacebookPageWrapper';

const News = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust this timeout as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="news-section">
            <h1>NEWS</h1>
            {isLoading ? (
                <div className="custom-loader">
                    <div className="spinner"></div>
                    <p>Loading news feed...</p>
                </div>
            ) : (
                <div className="fb-page-container">
                    <FacebookPageWrapper 
                        fbPageUrl="https://www.facebook.com/OldTownShamrocks/"
                        tabs="timeline"
                        width="500"
                        height="700"
                    />
                </div>
            )}
        </div>
    );
};

export default News;