// File: src/pages/Contact.jsx
import React from "react";
import "../styles/Contact.css";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

const floatVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};


function Contact() {
  return (
    <motion.section
  className="contact-page"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* LEFT SECTION */}
  <motion.div className="contact-left" variants={item}>
    <motion.h1 className="contact-heading" variants={item}>
      contact<span>.</span>
    </motion.h1>
    <motion.p className="contact-subtext" variants={item}>
      Get in touch with me via social media or send me an email.
    </motion.p>

    <motion.div className="social-links" variants={item}>
      {[
        {
          icon: <FaEnvelope className="icon email" />,
          name: "Email",
          link:
            "mailto:sathwikacharyaofficial@gmail.com?subject=Hello%20Sathwik&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.",
        },
        {
          icon: <FaFacebookF className="icon facebook" />,
          name: "Facebook",
          link: "https://facebook.com",
        },
        {
          icon: <FaLinkedinIn className="icon linkedin" />,
          name: "LinkedIn",
          link: "https://linkedin.com",
        },
        {
          icon: <FaInstagram className="icon instagram" />,
          name: "Instagram",
          link: "https://instagram.com",
        },
      ].map(({ icon, name, link }) => (
        <motion.a
          key={name}
          href={link}
          target="_blank"
          rel="noreferrer"
          variants={item}
          whileHover={{ scale: 1.12, x: 12, color: "#00acee" }}
          whileTap={{ scale: 0.97 }}
        >
          {icon}
          <span>{name}</span>
        </motion.a>
      ))}
    </motion.div>
  </motion.div>

  {/* RIGHT IMAGE SECTION */}
  <motion.div
    className="contact-right"
    variants={item}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.8 }}
  >
    <motion.img
      src="/assets/cbg3.png"
      alt="Contact Visual"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      variants={floatVariant}
    />
  </motion.div>

  {/* FORM SECTION */}
  <motion.div className="emailcontact" variants={item}>
    <motion.h3 className="email-heading" variants={item}>
      Send me an Email
    </motion.h3>

    <motion.form
      className="contact-form"
      action="https://formsubmit.co/sathwikacharyaofficial@gmail.com"
      method="POST"
      variants={item}
    >
      <div className="form-columns">
        <div className="form-left">
          {["name", "phone", "email"].map((field, idx) => (
            <motion.input
              key={field}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              required
              whileFocus={{ scale: 1.04 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          ))}
        </div>

        <div className="form-right">
          <motion.textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            whileFocus={{ scale: 1.04 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          ></motion.textarea>
        </div>
      </div>

      <motion.button
        type="submit"
        className="submit-btn"
        whileHover={{
          scale: 1.07,
          backgroundColor: "#2e00c3",
          boxShadow: "0px 0px 20px rgba(46, 0, 195, 0.4)",
        }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.3 }}
      >
        Send Mail
      </motion.button>
    </motion.form>
  </motion.div>
  
</motion.section>



  );
}

export default Contact;
