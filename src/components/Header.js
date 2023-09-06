import React from 'react';
import LinkWithName from './helper/LinkWithName';
import DropdownHeader from './helper/DropdownHeader';
import '../styles/headerStyle/headerStyle.css'
import '../styles/headerStyle/dropdownStyle.css'

export default function Header({ scrollState }) {

  return (
    <header className={scrollState ? 'showContainer' : 'container'}>
      {/* NTwist icon */}
      <img className='icon' src="images/ntwist-logo-dark.png" alt='ntwist-icon' />
      {/* other page links */}
      <div className='group-link'>
        <nav>
          {/* the first page links */}
          <LinkWithName
            className='navLinkText'
            link="https://ntwist.com/"
            text='HOME'
          />
          {/* dropdown INDUSTRIES link list */}
          <DropdownHeader />
          {/* the remaining page links */}
          <LinkWithName
            className='navLinkText'
            link="https://ntwist.com/ai-software/"
            text='AI Software'
          />
          <LinkWithName
            className='navLinkText'
            link="https://ntwist.com/blog/"
            text='Blog'
          />
          <LinkWithName
            className='navLinkText'
            link="https://ntwist.com/contact-us"
            text='Contact Us'
          />
        </nav>
      </div>
    </header>
  );
}