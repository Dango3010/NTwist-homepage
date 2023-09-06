import React, { useState } from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/headerStyle/headerStyle.css'
import '../styles/headerStyle/dropdownStyle.css'

export default function Header() {
  const [dropState, setDropState] = useState(false);

  return (
    <header className="container">
      <div className='icon-with-text'>
        <img className='icon' src="images/ntwist-logo-dark.png" alt='ntwist-icon' />
      </div>

      <div className='group-link'>
        <nav>
          <LinkWithName
            className='navLinkText'
            link="https://ntwist.com/"
            text='HOME'
          />

          <div className="dropdown">
            <button
              className='dropbtn'
              onClick={() => setDropState(!dropState)}
            >
              INDUSTRIES
            </button>

            <ul
              className={`dropdown-content ${dropState ? 'show' : ''}`}
            >
              <li className='li-tag'>
                <LinkWithName
                  className='bold-text-dropdown'
                  link="https://ntwist.com/project/sustainability-assistant/"
                  text='Sustainability'
                />
              </li>
              <li className='li-tag'>
                <LinkWithName
                  className='bold-text-dropdown'
                  link="https://ntwist.com/metal-mining/"
                  text='Mineral Processing'
                />
              </li>
              <li className='li-tag'>
                <LinkWithName
                  className='bold-text-dropdown'
                  link="https://ntwist.com/mine-to-mill-to-mine-optimization/"
                  text='Mine-to-mill-to-mine optimization'
                />
              </li>
              <li className='li-tag'>
                <LinkWithName
                  className='bold-text-dropdown'
                  link="https://ntwist.com/oil-gas/"
                  text='Oil & Gas'
                />
              </li>
            </ul>
          </div>

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