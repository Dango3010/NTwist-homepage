import React from 'react';
import {DirectLink} from './helper/DirectLink';

//include descriptions and image in a flexbox
function TextImage ({imageName, description, title, content, altName}) {
  return (
    <div>
      
      <div>
        {content 
        ? (<span>{title}</span>)
        : false
        }
        <span>{description}</span>

      </div>
      
      <img src={`image/${imageName}`} alt={altName}/>

    </div>
  );
}

export default TextImage;