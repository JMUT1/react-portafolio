import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* FRONTEND EXPERIENCE */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          {/* CONTENEDOR DONDE SE VA TRABAJAR CON LOS ARTICULOS INDIVIDUALES */}
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND CONTENEDORES */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>NODE JS</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>MONGO DB</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
