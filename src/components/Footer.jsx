import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useSelector } from 'react-redux';

function Footer() {
  const name = useSelector(state => state.user.name);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-column">
          <h3>Address</h3>
          <p>{name}<br/> Neelavara  <br />Udupi, India</p><br/>
          <h3>Find Me On</h3>
          <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/sathwika-acharya-ijjub13" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Sathwikacharya777" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_7_.wik._?igsh=MWU5MzNjd29jNGw5cA==" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>


        </div>
      </div>
      <p className="footer-bottom">© 2025 {name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
