import React from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/textImageStyle.css'

//description and image in a flexbox
export default function TextImage ({ imageName, description, heading, altName, buttonLink }){
  return(
    <div className='layout'>
      
      <div className='content'>
        {heading
        ? (<span>{heading}</span>)
        : false
        }
        <span className='description'>{description}</span>
        <LinkWithName 
          text='Read More' 
          className='button'
          link={buttonLink}
        />
      </div>
      
      <img 
        src={`images/${imageName}`} 
        alt={altName}
        className='image'
      />

    </div>
  );
}
    
