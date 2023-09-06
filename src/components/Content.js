import React from 'react';
import TextImage from './helper/TextImage'
import contents from '../strings-obj-data/contents';

export default function Content() {
  return (
    <div>
      {contents.map(content => (
        <TextImage
          key={content.id}
          heading={content.heading}
          buttonClassName={content.buttonClassName}
          description={content.description}
          description2={content.description2}
          imageName={content.imageName}
          altName={content.altName}
          buttonLink={content.buttonLink}
        />
      ))}
    </div>
  );
}
