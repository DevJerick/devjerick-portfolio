import React from "react";
import { Link } from "react-scroll";
import Dev from "../img/dev3.svg";
import "../style/main.css";

const Main = () => {
  return (
    <div className='main'>
      <div className='mainContainer'>
        <div className='main-text'>
          <div className='text-container'>
            <h1>Hi,</h1>
            <h1>
              I'm <span>Jerick Sejas</span>
            </h1>
            <h3>Web Developer</h3>
            <button>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                Read More
              </Link>
              <i className='bx bx-right-arrow-alt'></i>
            </button>
            <div className='social-link'>
              <ul>
                <li>
                  <a
                    href='https://github.com/DevJerick'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='bx bxl-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.facebook.com/panterapares321'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='bx bxl-facebook-circle'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/QuesoHabambuhay'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='bx bxl-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/panterapares/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='bx bxl-instagram-alt'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/jerick-sejas-b37036258/'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='bx bxl-linkedin-square'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='main-image'>
          <img src={Dev} alt='illustration' />
        </div>
      </div>
    </div>
  );
};

export default Main;
