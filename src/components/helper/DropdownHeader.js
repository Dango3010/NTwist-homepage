import React, { useState } from 'react';
import LinkWithName from './LinkWithName';
import '../../styles/headerStyle/dropdownStyle.css'

//header dropdown link list
export default function DropdownHeader() {
  const [dropState, setDropState] = useState(false);

  return (
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
 );
}