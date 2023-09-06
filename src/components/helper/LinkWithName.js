import React from 'react';
import '../../styles/linkStyle.css'

//a direct link with a name
export default function LinkWithName ({text, className, link}) {

  return (
    <a className={className} href={link}>
      <span>{text}</span>
    </a>
  )
}

