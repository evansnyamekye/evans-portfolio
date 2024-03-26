import React from 'react'
import './services.css'
import { BsCheck } from "react-icons/bs";

const Service = () => {
  return (
    <section id='services'>
        <h5>What I offer</h5>
        <h2>Service</h2>

        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Focusing on enhancing user experience and functionality.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Conduct research including useabilty testing, to identify user preferences .</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Collaborated with cross-functional teams to implement design improvement.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Utilized tools such as AdobeXD and InVision to create interactive mockups.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Implement a user-centered design approach with best practices in visual design.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>As result of redesign initiative, Nested winessed a 25% increase in user engagement.</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Led the end to end development of TLB microcredit website.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Utilized modern web development technologies such JavaScript, HTML5, CSS3(Including framworks like React.js).</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Utilized server-side languages(such us Node.js or PHP) to build responsive and dynamic website.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Implemented best practices in web performance optimization resulting in reduction page load time.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Collaborated with designers to translate visual mockups into functional web interfaces.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Integrated third-party API's and services to enhance website functionality.</p>
              </li>
            </ul>
          </article>

          <article className="service">
            <div className="service__head">
              <h3>Backend-API Integration</h3>
            </div>

            <ul className="service__list">
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Implemented database optimization for a high-traffic web application built on Rails and PostgreSQL.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Conducted in-depth analysis of database schemas, query excecution and indexing startegies.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Worked with development team to refactor ActiveRecord queries and database transactions.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Implemented database monitoring and logging solutions to track performances.</p>
              </li>
              <li>
                <BsCheck className="service__list-icon"/>
                <p>Implement a user-centered design approach with best practices in visual design.</p>
              </li>
            </ul>
          </article>
        </div>
     </section>
  )
}

export default Service
