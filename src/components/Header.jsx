import React, { useState } from "react";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="main-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ boxShadow: "0 4px 20px rgba(255,255,255,0.1)" }}
    >
      <div className="logo">
        <motion.img
          src="/assets/logoo.png"
          alt="Logo"
          className="logo-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </div>

      <motion.nav
        className={`nav-links ${isMenuOpen ? "open" : ""}`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          // { path: "/blog", label: "Blog" },
          { path: "/project", label: "Project" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }) => (
          <motion.div
            key={path}
            whileHover={{ scale: 1.1, color: "#ddd" }}
            transition={{ duration: 0.3 }}
          >
            <Link to={path} onClick={closeMenu}>{label}</Link>
          </motion.div>
        ))}

        {/* 🔽 Mobile Social Icons with motion already handled */}
        <motion.div
          className="social-icons-mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            {
              href: "mailto:sathwikacharyaofficial@gmail.com",
              icon: <FaEnvelope />,
            },
            {
              href: "https://github.com/Sathwikacharya777",
              icon: <FaGithub />,
            },
            {
              href: "https://www.linkedin.com/in/sathwika-acharya-ijjub13",
              icon: <FaLinkedin />,
            },
            {
              href: "https://www.instagram.com/_7_.wik._",
              icon: <FaInstagram />,
            },
          ].map(({ href, icon }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, color: "#ddd" }}
              transition={{ duration: 0.3 }}
              style={{ margin: "0 10px" }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>


      <motion.div
        className="social-icons-desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {[
          {
            href: "mailto:sathwikacharyaofficial@gmail.com",
            icon: <FaEnvelope />,
          },
          {
            href: "https://github.com/Sathwikacharya777",
            icon: <FaGithub />,
          },
          {
            href: "https://www.linkedin.com/in/sathwika-acharya-ijjub13",
            icon: <FaLinkedin />,
          },
          {
            href: "https://www.instagram.com/_7_.wik._",
            icon: <FaInstagram />,
          },
        ].map(({ href, icon }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5}}
            transition={{ duration: 0.3 }}
            style={{ margin: "0 10px" }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    
      <motion.div
        className="hamburger"
        onClick={toggleMenu}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </motion.div>
    </motion.header>

  );
}

export default Header;
