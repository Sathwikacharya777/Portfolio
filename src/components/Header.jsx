// File: src/components/Header.jsx
import React, { useState } from "react";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      <div className="logo">SA</div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/project" onClick={closeMenu}>Project</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className={`social-icons ${isMenuOpen ? "visible" : ""}`}>
        <a href="https://github.com/Sathwikacharya777"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sathwika-acharya-ijjub13"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_7_.wik._?igsh=MWU5MzNjd29jNGw5cA=="><FaInstagram /></a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
