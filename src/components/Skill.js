import React from "react";
import "../style/skill.css";
import html from "../img/logo/html.svg";
import css from "../img/logo/css.svg";
import js from "../img/logo/js.svg";
import react from "../img/logo/react.svg";
import java from "../img/logo/java.svg";
import php from "../img/logo/php.svg";
import mysql from "../img/logo/mysql.svg";
import mssql from "../img/logo/mssql.svg";
import postgres from "../img/logo/postgres.svg";
import sass from "../img/logo/sass.svg";
import bootstrap from "../img/logo/bootstrap.svg";
import git from "../img/logo/git.svg";
import github from "../img/logo/github.svg";
import npm from "../img/logo/npm.svg";

const Skill = () => {
  return (
    <div className='skill' id='skill'>
      <div className='skill-container'>
        <h2>I have experiences with these technologies</h2>
        <div className='logo-container'>
          <div className='card'>
            <h4>HTML</h4>
            <img src={html} alt='html-logo' />
          </div>

          <div className='card'>
            <h4>CSS</h4>
            <img src={css} alt='css-logo' />
          </div>

          <div className='card'>
            <h4>JavaScript</h4>
            <img src={js} alt='js-logo' />
          </div>

          <div className='card'>
            <h4>React</h4>
            <img src={react} alt='react-logo' />
          </div>

          <div className='card'>
            <h4>Java</h4>
            <img src={java} alt='java-logo' />
          </div>

          <div className='card'>
            <h4>PHP</h4>
            <img src={php} alt='php-logo' />
          </div>

          <div className='card'>
            <h4>MySQL</h4>
            <img src={mysql} alt='mysql-logo' />
          </div>

          <div className='card'>
            <h4>Microsoft SQL</h4>
            <img src={mssql} alt='mssql-logo' />
          </div>

          <div className='card'>
            <h4>PostgreSQL</h4>
            <img src={postgres} alt='postgres-logo' />
          </div>

          <div className='card'>
            <h4>Sass</h4>
            <img src={sass} alt='sass-logo' />
          </div>

          <div className='card'>
            <h4>Bootstrap</h4>
            <img src={bootstrap} alt='bootstrap-logo' />
          </div>

          <div className='card'>
            <h4>Git</h4>
            <img src={git} alt='git-logo' />
          </div>

          <div className='card'>
            <h4>Github</h4>
            <img src={github} alt='github-logo' />
          </div>

          <div className='card'>
            <h4>NPM</h4>
            <img src={npm} alt='npm-logo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
