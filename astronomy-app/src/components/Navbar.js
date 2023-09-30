import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logoImage from '../img/logo.png';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
      <ScrollLink className="navbar-brand" to="home" spy={true} smooth={true} duration={500}>
          <img src={logoImage} alt="Astronomy 101 Logo" className="img-fluid logo_size" />
          </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <ScrollLink className="nav-link nav_li_custom" to="home_section" spy={true} smooth={true} duration={500}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link nav_li_custom" to="course_section" spy={true} smooth={true} duration={500}>Course</ScrollLink>
            </li>
            <li className="nav-item nav_li_custom">
              <ScrollLink className="nav-link" to="contact_section" spy={true} smooth={true} duration={500}>Contact</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
