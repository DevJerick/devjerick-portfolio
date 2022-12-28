import React from "react";
import "../style/project.css";
import canbo from "../img/project/canbo.PNG";
import pikit from "../img/project/pikit.PNG";
import todo from "../img/project/todo.PNG";
import starbucks from "../img/project/startbucks.PNG";
import cat from "../img/project/cat-generator.PNG";
import kfc from "../img/project/kfc.PNG";
import wave from "../img/wave.svg";
import wave1 from "../img/wave1.svg";

const Project = () => {
  return (
    <div className='project'>
      <div className='wave'>
        <img src={wave} alt='wave' />
      </div>

      <h1 className='project-title'>My Project</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={canbo} alt='canbo' />
          <h3 className='project-name'>Canbo Landing Page</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/Canbo'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://canbo.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={pikit} alt='pikit' />
          <h3 className='project-name'>123Pikit Band Website</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/123pikit-website'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://123pikit-website.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={todo} alt='todo' />
          <h3 className='project-name'>Todo-List App</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/react-app'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://todo-app-react-rho-liart.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={starbucks} alt='canbo' />
          <h3 className='project-name'>Starbucks Website Clone</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/Starbucks-Clone-Practice'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://devjerick-starbucks-clone.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={cat} alt='cat' />
          <h3 className='project-name'>Generate Cat Fact</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/CatFact-Generator-react'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://cat-fact-generator-react.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={kfc} alt='canbo' />
          <h3 className='project-name'>KFC Website Clone</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <a
              href='https://github.com/DevJerick/kfc-site-clone'
              target='_blank'
              rel='noreferrer'>
              <button className='btn'>
                <span>Code</span>
                <i className='bx bx-code-alt'></i>
              </button>
            </a>

            <a
              href='https://kfc-site-clone.vercel.app/'
              target='_blank'
              rel='noreferrer'>
              <button className='btn-outline'>
                <span>Live</span>
                <i class='bx bx-show-alt'></i>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='wave1'>
        <img src={wave1} alt='wave' />
      </div>
    </div>
  );
};

export default Project;
