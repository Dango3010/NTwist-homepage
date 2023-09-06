import React from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/textImageStyle.css'
import '../styles/contentStyle.css'

//description and image in a flexbox
export default function TextImage ({ imageName, description, heading, altName, buttonLink }){
  return(
    <div className={heading ? 'layout2' : 'layout'}>
      
      <div className={heading ? 'content2' : 'content'}>
        {heading
        ? (<span className={heading ? 'heading2' : 'heading'}>{heading}</span>)
        : false
        }
        <p className={heading ? 'description2' : 'description'}>{description}</p>
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
    
