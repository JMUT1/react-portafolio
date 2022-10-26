import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>José María Ureña Torres</h1>
        <h5 className="text-light">Jr. Front-End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
          <a href="#contact" className="scroll__down">
            Scroll down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
