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
        buttonClassName='topButton'
        imageName='home-image-icons-v6.png'
        altName='component-1'
        buttonLink='https://ntwist.com/mine-to-mill-to-mine-optimization'
      />

      <TextImage
        heading='Mine-To-Mill-To-Mine Optimization'
        buttonClassName='button'
        description="NTWIST's newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        imageName='mine-pic.jpg'
        altName='component-2'
        buttonLink='https://ntwist.com/mine-to-mill-to-mine-optimization/'
      />

    </div>
  );
}

export default App;

