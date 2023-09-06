import React from 'react';
import LinkWithName from './helper/LinkWithName';
import '../styles/footerStyle.css'

export default function Footer () {
  return (
    <div className='footLayout'>
    <div className='footWrap'>
      <img 
        className='footImage' 
        src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" 
        alt=""
      />
      <div>
        <LinkWithName
          className='footText'
          link="https://ntwist.com/ntwist-cloned-4582/"
          text='Home'
        />
        <LinkWithName
          className='footText'
          link="https://ntwist.com/about-us/"
          text='About Us'
        />
        <LinkWithName
          className='footText'
          link="https://ntwist.com/contact-us/"
          text='Contact Us'
        />
        <LinkWithName
          className='footText'
          link="https://ntwist.com/privacy-policy"
          text='Privacy Policy'
        />
        <LinkWithName
          className='footText'
          link="https://ntwist.com/sitemap/"
          text='Sitemap'
        />
      </div>
      <p className='footDescription'>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      {/* <i class="fa-brands fa-twitter">BIRDDD</i> */}
      <span className='footDescription'>© 2022. Ntwist Inc.</span>
      </div>
    </div>
  );
}