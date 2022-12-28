import React from "react";
import "../style/project.css";
import canbo from "../img/project/canbo.PNG";
import pikit from "../img/project/pikit.PNG";
import todo from "../img/project/todo.PNG";
import starbucks from "../img/project/startbucks.PNG";
import cat from "../img/project/cat-generator.PNG";
import kfc from "../img/project/kfc.PNG";

const Project = () => {
  return (
    <div className='project'>
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
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src={pikit} alt='canbo' />
          <h3 className='project-name'>123Pikit Band Website</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
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
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
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
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
          </div>
        </div>

        <div className='project-card'>
          <img src={cat} alt='canbo' />
          <h3 className='project-name'>Generate Cat Fact</h3>
          <p className='description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eum
            sit ex deserunt aliquid distinctio corrupti, perferendis dicta
            totam, quibusdam dolores explicabo? Consequatur dolor sed omnis
            labore perferendis neque iste?
          </p>

          <div>
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
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
            <button>
              <span>Code</span>
              <i className='bx bx-code-alt'></i>
            </button>

            <button className='btn-outline'>
              <span>Live</span>
              <i class='bx bx-show-alt'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
