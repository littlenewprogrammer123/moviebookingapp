import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/image-source/luffy-logo.webp"
          alt="logo"
          style={{
            width: '35px',
            height: '35px',
            verticalAlign: 'middle',
            marginRight: '10px',
            borderRadius: '50%',
          }}
        />
        SunnyBooking
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <HashLink smooth to="/#now-showing" className="nav-link">Now Showing</HashLink>
        </li>
        <li>
          <Link to="/upcoming" className="nav-link">Upcoming</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link> {/* ✅ lowercase */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
