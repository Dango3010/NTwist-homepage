import React from 'react';
import '../../styles/linkButtonStyle.css'

//a direct link with a name
export default function LinkWithName({ link, className, text }) {

  return (
    <a
      className={className}
      href={link}
    >
      {text}
    </a>
  )
}

