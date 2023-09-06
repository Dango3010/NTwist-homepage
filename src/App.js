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
      />
    </div>
  );
}

export default App;

