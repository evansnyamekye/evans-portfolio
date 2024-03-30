import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <footer>
    <a href="#about" className="footer__logo">Evans Portfolio</a>

    <ul className="permalinks">
      <li><a href="#about">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div data-aos="fade-up" data-aos-duration="2000" className="footer__socials">
      <a href="https://web.facebook.com/nyamekye.evans.9/" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://twitter.com/nyamekye2131" aria-label="Twitter"><IoLogoTwitter /></a>
      <a href="https://www.instagram.com/nyamekye7346" aria-label="Instagram"><FiInstagram /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; EVANS Portfolio. All right reserved.</small>
    </div>
  </footer>
);

export default Footer;
