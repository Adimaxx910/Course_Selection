import React, { useState } from 'react';
import { Link, NavLink, BrowserRouter as Router } from 'react-router-dom';

import '../Styles/Header.css';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLeftSectionOpen, setLeftSectionOpen] = useState(true);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    setLeftSectionOpen(!isLeftSectionOpen);
  };

  return (
   
      <header className="main-header">
        <div className="header-container">
        <div className={`left-section ${isLeftSectionOpen ? '' : 'open'}`}>
            <div className="logo">
              <img src="./ben10.jpg" alt="Logo" />
            </div>
            <div className="login-register">
              <Link to="/login" className="auth-link">
                Login/Register
              </Link>
            </div>
          </div>

          <div className={`right-section ${isNavOpen ? 'open' : ''}`}>
            <div className="toggle-button" onClick={toggleNav}>
              ☰
            </div>

            <nav className="main-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Subjects">Subjects</NavLink>
              <NavLink to="/Home">Contact</NavLink>
              <NavLink to="/Home">About Us</NavLink>      
            </nav>
          </div>
        </div>
      </header>
   
  );
};

export default Header;
