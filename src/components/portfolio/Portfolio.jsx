import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG31 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="containert portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <a href="http://github.com" className="btn">
            Github
          </a>
          <a
            href="http://https://dribbble.com/"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
