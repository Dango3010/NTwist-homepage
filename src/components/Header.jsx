import React, { useState } from 'react';
import '../styles/headerStyle.css'

export default function Header() {
  const [dropState, setDropState] = useState(false);

  return (
    <header className="container">
      <div className='icon-with-text'>
        <img style={{ width: '181px', height: '65px' }} src="images/ntwist-logo-dark.png" alt='ntwist-icon' />
      </div>

      <div style={{ fontSize: '23px', paddingRight: '20px' }}>
        <nav>
          <a className='bold-text' href="https://ntwist.com/">
            HOME
          </a>

          <div className="dropdown">
            <button className='dropbtn' onClick={() => setDropState(!dropState)}>
              INDUSTRIES
            </button>

            <ul className={`dropdown-content ${dropState ? 'show' : ''}`}>
              <li className='li-tag'>
                <a className='bold-text-dropdown' href="https://ntwist.com/project/sustainability-assistant/">
                  <span>Sustainability</span>
                </a>
              </li>
              <li className='li-tag'>
                <a className='bold-text-dropdown' href="https://ntwist.com/metal-mining/">
                  <span>Mineral Processing</span>
                </a>
              </li>
              <li className='li-tag'>
                <a className='bold-text-dropdown' href="https://ntwist.com/mine-to-mill-to-mine-optimization/">
                  <span>Mine-to-mill-to-mine optimization</span>
                </a>
              </li>
              <li className='li-tag'>
                <a className='bold-text-dropdown' href="https://ntwist.com/oil-gas/">
                  <span>Oil & Gas</span>
                </a>
              </li>
            </ul>
          </div>

          <a className='bold-text' href="https://ntwist.com/ai-software/">AI Software</a>
          <a className='bold-text' href="https://ntwist.com/blog/">Blog</a>
          <a className='bold-text' href="https://ntwist.com/contact-us/">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}