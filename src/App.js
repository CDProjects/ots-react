import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Spinner from './Components/Spinner';

const Home = lazy(() => import('./Components/Home'));
const News = lazy(() => import('./Components/News'));
const Team = lazy(() => import('./Components/Team'));
const Training = lazy(() => import('./Components/Training'));
const Juniors = lazy(() => import('./Components/Juniors'));
const Fixtures = lazy(() => import('./Components/Fixtures'));
const MedRec = lazy(() => import('./Components/MedRec'));
const Contact = lazy(() => import('./Components/Contact'));

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const sectionMap = {
      '/': 'HOME',
      '/news': 'NEWS',
      '/team': 'TEAM',
      '/training': 'TRAINING',
      '/juniors': 'JUNIORS',
      '/fixtures': 'FIXTURES',
      '/media-recruitment': 'MEDIA & RECRUITMENT',
      '/contact': 'CONTACT'
    };

    const section = sectionMap[location.pathname] || 'HOME';
    document.title = `Shamrocks | ${section}`;
  }, [location]);

  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <TitleUpdater />
      <div className="App">
        <div className="content-container">
          <Navbar />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/team" element={<Team />} />
              <Route path="/training" element={<Training />} />
              <Route path="/juniors" element={<Juniors />} />
              <Route path="/fixtures" element={<Fixtures />} />
              <Route path="/media-recruitment" element={<MedRec />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;