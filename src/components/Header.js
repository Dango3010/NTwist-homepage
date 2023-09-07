import React from 'react';
import LinkWithText from './helper/LinkWithText';
import DropdownHeader from './helper/DropdownHeader';
import '../styles/headerStyle/headerStyle.css'
import '../styles/headerStyle/dropdownStyle.css'

export default function Header({ scrollState }) {

  return (
    <header className={scrollState ? 'showContainer' : 'container'}>
      <img
        className='icon'
        src="images/ntwist-logo-dark.png"
        alt='ntwist-icon'
      />

      {/* other page links */}
      <div className='group-link'>
        <nav>

          {/* the first page links */}
          <LinkWithText
            className='navLinkText'
            link="https://ntwist.com/"
            text='Home'
          />

          {/* dropdown INDUSTRIES link list */}
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
