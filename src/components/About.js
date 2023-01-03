import React from "react";
import "../style/about.css";
import about from "../img/about.svg";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <div className='about-img'>
          <img src={about} alt='about' />
        </div>
        <div className='about-text'>
          <h1 className='title'>About Me</h1>
          <p>
            I consider myself a self-taught person constantly learning and
            always looking for new things to improve. I'm Looking forward for
            the opportunity to continue my career as a developer to create and
            build a real world project to enhance my knowledge and skill.
          </p>
          <p>
            Right now I'm focusing on the front-end and I also plan to study the
            back-end because I have a little experience here when I was still
            studying in college. I want to see want happen if I don't give up.
          </p>
          <a href='JERICK SEJAS RESUME.pdf' download='JERICK SEJAS RESUME.pdf'>
            <button>
              <span>Download CV </span>
              <i className='bx bxs-download'></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
