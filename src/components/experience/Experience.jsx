import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => (
  <section id="experience">
    <h5>What Skill I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div data-aos="fade-up-right" data-aos-duration="2000" className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Expeprience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Svelte</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>

      <div data-aos="fade-up-left" data-aos-duration="2000" className="experience__frontend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>PostgreSQL</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Java</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Python</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
