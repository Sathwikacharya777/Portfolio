// File: src/components/Header.jsx
import React, { useState } from "react";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="main-header">
      <div className="logo">SA</div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {/* <a href="/blog">Blog</a> */}
        <a href="/project">Project</a>
        <a href="/contact">Contact</a>
        
      </div>

      <div className="social-icons">
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
