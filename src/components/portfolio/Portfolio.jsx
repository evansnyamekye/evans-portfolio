import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG8 from '../../assets/portfolio8.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Awesome-books',
    summary: 'This is a single Page JavaScript application that create, Add, display and remove list of books from local storage.',
    github: 'https://github.com/evansnyamekye/Awesome-books-ES6.git',
    livedemo: 'https://evansnyamekye.github.io/Awesome-books-ES6',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Says International School',
    summary: 'Says International School stands as a beacon of academic excellence, boasting top-notch facilities and advanced technology to enrich the teaching and learning experience.',
    github: 'https://github.com/evansnyamekye/Middle-School.git',
    livedemo: 'https://www.saysinternationalschool.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Evans-Online Bootcamp',
    summary: 'Embark on a journey of learning and innovation with my creation of an online school, designed to offer students an unparalleled experience software development.',
    github: 'https://github.com/evansnyamekye/Capstone-PR.git',
    livedemo: 'https://capstone-pr.vercel.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Youtube - Prototype',
    summary: 'Dive into the world of online video with a prototype of a YouTube website, meticulously crafted to deliver an immersive and user-friendly viewing experience.',
    github: 'https://github.com/evansnyamekye/YouTube-App',
    livedemo: 'https://you-tube-app-nu.vercel.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Magicians',
    summary: 'An Interactive playground for mathematical wonders, where numbers come alive through calculations and concepts. ',
    github: 'https://github.com/evansnyamekye/Magicians.git',
    livedemo: 'https://magicians-beta.vercel.app',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Bookstore',
    summary: 'A virtual haven for book enthusiasts, offering a seamless and browsing and shopping experience complete with search functionalities and virtual cart. ',
    github: 'https://github.com/evansnyamekye/bookstore.git',
    livedemo: 'https://bookstore-mu-indol.vercel.app',
  },
  {
    id: 7,
    image: IMG8,
    title: 'Budget Application',
    summary: 'A practical navigator, leading users through the maze of personal finances with tools to track income, expenses, and budget goals.',
    github: 'https://github.com/evansnyamekye/budget-app.git',
    livedemo: 'https://budget-application-2kkv.onrender.com',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div data-aos="fade-down" data-aos-duration="2000" className="container portfolio__container">
      {data.map(({
        id, image, title, summary, github, livedemo,
      }) => (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="sum-txt">{summary}</p>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={livedemo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                livedemo
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;
