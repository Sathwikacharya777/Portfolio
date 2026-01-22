import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

function Footer() {
  const name = useSelector(state => state.user.name);

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Quick Links */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Quick Links</h3>
          <ul>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/project", label: "Projects" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <motion.li
                key={path}
                whileHover={{ scale: 1.05, x: 5, color: "#ddd" }}
                transition={{ duration: 0.3 }}
              >
                <Link to={path}>{label}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="footer-divider"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Address + Socials */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Address</h3>
          <p>
            {name}
            <br />
            Neelavara <br />
            Udupi, India
          </p>
          <br />
          <h3>Find Me On</h3>
          <div className="footer-social-links"> 
            {[
              {
                href: "mailto:sathwikacharyaofficial@gmail.com?subject=Hello%20Sathwik&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.",
                icon: "fa fa-envelope",
              },
              {
                href: "https://wa.me/919686235365?text=Hello%20Sathwik,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
                icon: "fab fa-whatsapp",
              },
              {
                href: "https://www.linkedin.com/in/sathwika-acharya-ijjub13",
                icon: "fab fa-linkedin",
              },
              {
                href: "https://github.com/Sathwikacharya777",
                icon: "fab fa-github",
              },
              {
                href: "https://www.instagram.com/_7_.wik._?igsh=MWU5MzNjd29jNGw5cA==",
                icon: "fab fa-instagram",
              },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, color: "#212121ff", rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <i className={icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.p
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        © 2025 {name}. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
