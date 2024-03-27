import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Evans from '../../assets/evans_about.png';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Evans} alt="About_evans-img" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>6+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>10+ Nationwide </small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>75+ Completed Projects</small>
          </article>
        </div>

        <p>
          I am a full-stack web developer with a passion for creating beautiful
          and functional websites. I have a strong background in both front-end
          and back-end development, and I am always looking for new challenges to
          tackle. I love working with clients to bring their ideas to life, and I
          am dedicated to delivering high-quality work that exceeds their expectations.
        </p>

        <a href="#contact" className="btn btn-primary">{'I\'Let\'s Talk'}</a>
      </div>
    </div>
  </section>
);

export default About;
