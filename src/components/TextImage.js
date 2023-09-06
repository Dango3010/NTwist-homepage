import React from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/textImageStyle/topContentStyle.css'
import '../styles/textImageStyle/contentStyle.css'

//description and image in a flexbox
export default function TextImage({
  imageName, description, heading,
  altName, buttonLink, buttonClassName
}) {
  return (
    <div className={heading ? 'layout' : 'topLayout'}>

      <div className={heading ? 'content' : 'topContent'}>
        {heading
          ? (<span className='heading'>{heading}</span>)
          : false
        }
        <p className={heading ? 'description' : 'topDescription'}>{description}</p>
        <LinkWithName
          link={buttonLink}
          className={buttonClassName}
          text='Read More'
        />
      </div>

      <img
        className={heading ? 'image' : 'topImage'}
        src={`images/${imageName}`}
        alt={altName}
      />

    </div>
  );
}

