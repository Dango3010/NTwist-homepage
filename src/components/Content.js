import React from 'react';
import TextImage from './helper/TextImage'

export default function Content () {
  return (
    <div>
      <TextImage
        buttonClassName='topButton'
        description='Data-powered solutions for Industrial Excellence'
        imageName='home-image-icons-v6.png'
        altName='top-content'
        buttonLink='https://ntwist.com/mine-to-mill-to-mine-optimization'
      />

      <TextImage
        heading='Mine-To-Mill-To-Mine Optimization'
        buttonClassName='button'
        description="NTWIST's newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans."
        imageName='mine-pic.jpg'
        altName='main-content-1'
        buttonLink='https://ntwist.com/mine-to-mill-to-mine-optimization/'
      />

    </div>
  );
}
