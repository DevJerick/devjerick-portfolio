import React from "react";
import "../style/about.css";
import about from "../img/about.svg";

const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className='about-img'>
          <img src={about} alt='about' />
        </div>
        <div className='about-text'>
          <h1 className='title'>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            sint obcaecati molestiae blanditiis illum, architecto molestias
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            modi amet possimus adipisci, dolores perferendis!
          </p>
          <button>
            <span>Download CV </span>
            <i className='bx bxs-download'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
