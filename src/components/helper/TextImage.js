import React from 'react';
import LinkWithName from './LinkWithName';
import '../../styles/textImageStyle/contentStyle.css'
import '../../styles/textImageStyle/topContentStyle.css'

//description and image in a flexbox
export default function TextImage({
  imageName, description, heading,
  altName, buttonLink, buttonClassName,
  description2
}) {
  return (
    <div
      className={heading ? 'layout' : 'topLayout'}
    >
      {/* the image is on the right for the contents with an odd order number, 
      and the image is on the left for contents with an even order number */}
      {Number(altName[altName.length - 1]) % 2 === 0 &&
        <img
          className={heading ? 'image' : 'topImage'}
          src={`images/${imageName}`}
          alt={altName}
        />
      }

      <div
        className={heading ? 'content' : 'topContent'}
      >
        {/* the heading */}
        {heading
          ? (<span className='heading'>{heading}</span>)
          : false
        }

        {/* the description */}
        <p
          className={heading ? 'description' : 'topDescription'}
        >
          {description}
        </p>
        {description2
          ? (<p className='description'>{description2}</p>)
          : false
        }

        {/* the button */}
        <LinkWithName
          link={buttonLink}
          className={buttonClassName}
          text='Read More'
        />
      </div>

      {Number(altName[altName.length - 1]) % 2 !== 0 &&
        <img
          className={heading ? 'image' : 'topImage'}
          src={`images/${imageName}`}
          alt={altName}
        />
      }
    </div>
  );
}