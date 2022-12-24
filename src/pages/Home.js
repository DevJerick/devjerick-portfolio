import React from "react";
import Main from "../components/Main";
import About from "../components/About";
import Skill from "../components/Skill";

const Home = () => {
  return (
    <div className='home'>
      <Main />
      <About />
      <Skill />
    </div>
  );
};

export default Home;
