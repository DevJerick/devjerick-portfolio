import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setClick(false);
  }, [location]);

  const handleClick = () => {
    setClick((prev) => !prev);
  };

  const iconChange = click ? "bx bx-x" : "bx bx-menu";
  const classChange = click ? "navLinks open" : "navLinks";

  return (
    <nav>
      <div className='navContainer'>
        <a href='/' className='logo'>
          <i className='bx bx-code-alt'></i>
          <span>DevJerick</span>
        </a>

        <div className={classChange}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/project'>Project</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <button onClick={handleClick}>
          <i className={iconChange}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
