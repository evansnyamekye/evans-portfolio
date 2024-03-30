import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => (
  <div data-aos="fade-right" data-aos-duration="2000" className="cta">
    <a href={CV} className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">{'Let\'s Talk'}</a>
  </div>
);

export default CTA;
