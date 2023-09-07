import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const [scrollState, setScroll] = useState(false);

  function HandleScroll() {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 600) { // if scroll over the first image, show the header
        setScroll(true);
      } else { // if scroll up and reach the first image, hide the header
        setScroll(false);
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', HandleScroll);

      // cleanup the event
      return () => {
        window.removeEventListener('scroll', HandleScroll);
      };
    }
  }, []);

  return (
    <div className="App">
      <Header scrollState={scrollState} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
