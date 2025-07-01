// File: src/components/Header.jsx
import React, { useState } from "react";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      <div className="logo">SA</div>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/project" onClick={closeMenu}>Project</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <div className={`social-icons ${isMenuOpen ? "visible" : ""}`}>
        <a
          href="mailto:sathwikacharyaofficial@gmail.com?subject=Hello%20Sathwik&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          title="Send Email"
        >
          <FaEnvelope />
        </a>
        <a href="https://github.com/Sathwikacharya777" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sathwika-acharya-ijjub13" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_7_.wik._" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
    </header>
  );
}

export default Header;
