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
    <div className='skill'>
      <div className='skill-container'>
        <h2>I have experience with these technologies</h2>
        <div className='logo-container'>
          <img src={html} alt='html-logo' />
          <img src={css} alt='css-logo' />
          <img src={js} alt='js-logo' />
          <img src={react} alt='react-logo' />
          <img src={java} alt='java-logo' />
          <img src={php} alt='php-logo' />
          <img src={mysql} alt='mysql-logo' />
          <img src={mssql} alt='mssql-logo' />
          <img src={postgres} alt='postgres-logo' />
          <img src={sass} alt='sass-logo' />
          <img src={bootstrap} alt='bootstrap-logo' />
          <img src={git} alt='git-logo' />
          <img src={github} alt='github-logo' />
          <img src={npm} alt='npm-logo' />
        </div>
      </div>
    </div>
  );
};

export default Skill;
