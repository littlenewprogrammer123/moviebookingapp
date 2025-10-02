import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Upcoming from './Upcoming';
import Contact from './Contact';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/image-source/luffy-logo.webp`}
            alt="logo"
            className="logo-img"
          />
          SunnyBooking
        </div>

        {/* Hamburger button */}
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><HashLink smooth to="/#now-showing" className="nav-link" onClick={closeMenu}>Now Showing</HashLink></li>
          <li><Link to="/upcoming" className="nav-link" onClick={closeMenu}>Upcoming</Link></li>
          <li><Link to="/Contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Page-specific content */}
      {location.pathname === '/upcoming' && <Upcoming />}
      {location.pathname === '/Contact' && <Contact />}
    </>
  );
};

export default Navbar;
