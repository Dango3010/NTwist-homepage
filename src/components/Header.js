import React from 'react';
import '../styles/headerStyle/headerStyle.css'
import '../styles/headerStyle/dropdownStyle.css'

import LinkWithText from './helper/LinkWithText';
import DropdownHeader from './helper/DropdownHeader';

// the header bar of homepage
export default function Header({ scrollState }) {

  return (
    <header className={scrollState ? 'showContainer' : 'container'}>
      {/* NTWIST icon */}
      <img
        className='icon'
        src="images/ntwist-logo-dark.png"
        alt='ntwist-icon'
      />

      {/* page links */}
      <div className='group-link'>
        <nav>
          {/* the first page link */}
          <LinkWithText
            className='navLinkText'
            link="https://ntwist.com/"
            text='Home'
          />

          {/* dropdown Industries link list */}
          <DropdownHeader />

          {/* the remaining page links */}
          <LinkWithText
            className='navLinkText'
            link="https://ntwist.com/ai-software/"
            text='AI Software'
          />
          <LinkWithText
            className='navLinkText'
            link="https://ntwist.com/blog/"
            text='Blog'
          />
          <LinkWithText
            className='navLinkText'
            link="https://ntwist.com/contact-us"
            text='Contact Us'
          />
        </nav>
      </div>
    </header>
  );
}
