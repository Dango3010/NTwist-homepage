import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  const [scrollState, setScroll] = useState(false);
  const [lastScrollState, setLastScroll] = useState(0);

  function HandleScroll() {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollState) { // if scroll down, show the header
        setScroll(true);
      } else { // if scroll up, hide the header
        setScroll(false);
      }

      setLastScroll(window.scrollY);  //= where we are in the page in px
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
  }, [lastScrollState]);

  return (
    <div className="App">
      <Header scrollState={scrollState} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
