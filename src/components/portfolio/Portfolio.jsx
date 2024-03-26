import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Awesome-books",
    github: "https://github.com/evansnyamekye/Awesome-books-ES6.git",
    livedemo: "https://evansnyamekye.github.io/Awesome-books-ES6",
  },
  {
    id: 2,
    image: IMG2,
    title: "Says International School",
    github: "https://github.com/evansnyamekye/Middle-School.git",
    livedemo: "https://www.saysinternationalschool.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Evans-Online Bootcamp",
    github: "https://github.com/evansnyamekye/Capstone-PR.git",
    livedemo: "https://capstone-pr.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Youtube - Prototype",
    github: "https://github.com/evansnyamekye/YouTube-App",
    livedemo: "https://you-tube-app-nu.vercel.app",
  },
  {
    id: 5,
    image: IMG6,
    title: "Magicians",
    github: "https://github.com/evansnyamekye/Magicians.git",
    livedemo: "https://magicians-beta.vercel.app"
  },
  {
    id: 6,
    image: IMG5,
    title: "Bookstore",
    github: "https://github.com/evansnyamekye/bookstore.git",
    livedemo: "https://bookstore-mu-indol.vercel.app",
  },
  {
    id: 7,
    image: IMG7,
    title: "Microcredit website",
    github:
      "https://github.comhttps://www.linkedin.com/in/evans-kofi-nyamekye-1980a4117",
    livedemo: "https://tlbmicrocredit.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, livedemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a
                    href={livedemo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    livedemo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
