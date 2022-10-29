import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* CARD 1 */}
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Year Working </small>
            </article>
            {/* CARD 2 */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200 + Worldwide </small>
            </article>
            {/* CARD 3 */}
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>80+ complet projects </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            hic asperiores fugit quos expedita sed debitis nihil voluptas,
            voluptate, inventore fuga cum omnis accusamus ullam modi ab! Sit,
            labore perferendis!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
