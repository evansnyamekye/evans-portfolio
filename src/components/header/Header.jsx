import React from 'react';
import './header.css';
import CTA from './CTA';
import Evans from '../../assets/evans.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div data-aos="fade-right" data-aos-duration="2000" className="container header__container">
      <h5>{'Hello!, I\'m'}</h5>
      <h1>Evans Kofi Nyamekye</h1>
      <h5 className="text-align">Full Stack Developer</h5>
      <h5 className="text-align">From Ghana, West Africa</h5>
      <CTA />
      <HeaderSocials />

      <div className="evans">
        <img src={Evans} alt="evans-img" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
