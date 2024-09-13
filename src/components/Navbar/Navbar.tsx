import React from 'react';
import './navbar.module.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">MyLogo</a>
      </div>
      <div className="navbar-right">
        <a href="/about" className="nav-link">About</a>
        <a href="/services" className="nav-link">Projects</a>
        <a href="/contact" className="nav-link">Blogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
