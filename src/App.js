import React from 'react';
import './App.css';
import Header from './components/Header';
import TextImage from './components/TextImage'

function App() {
  return (
    <div className="App">
      <Header />
      <TextImage
        description='Data-powered solutions for Industrial Excellence'
        imageName='home-image-icons-v6.png'
        altName='component-1'
        buttonLink='https://ntwist.com/mine-to-mill-to-mine-optimization'
      />

    </div>
  );
}

export default App;

