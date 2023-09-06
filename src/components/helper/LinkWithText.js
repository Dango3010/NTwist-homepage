import React from 'react';
import '../../styles/helperStyle/linkWithTextStyle.css'

//a direct link with a name
export default function LinkWithText ({ link, className, text }) {

  return (
    <a
      className={className}
      href={link}
    >
      {text}
    </a>
  )
}

