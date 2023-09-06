import React from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/textImageStyle.css'

//description and image in a flexbox
export default function TextImage ({ imageName, description, title, content, altName }){
  return(
    <div className='layout'>
      
      <div className='content'>
        {content 
        ? (<span>{title}</span>)
        : false
        }
        <span className='description'>{description}</span>
        <LinkWithName 
          text='Read More' 
          className='button'
          link='https://ntwist.com/mine-to-mill-to-mine-optimization'
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
    
