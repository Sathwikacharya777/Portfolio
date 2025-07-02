// File: src/pages/Contact.jsx
import React from "react";
import "../styles/Contact.css";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-left">
        <h1 className="contact-heading">contact<span>.</span></h1>
        <p className="contact-subtext">
          Get in touch with me via social media or send me an email.
        </p>

        <div className="social-links">
          <a
            href="mailto:sathwikacharyaofficial@gmail.com?subject=Hello%20Sathwik&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            title="Send Email"
          >
            <FaEnvelope className="icon email" />
            <span>Email</span>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="icon facebook" />
            <span>Facebook</span>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="icon linkedin" />
            <span>LinkedIn</span>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="icon instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="contact-right">
        <img src="/assets/cbg3.png" alt="Contact Visual" />
      </div>

      <div className="emailcontact">
        <h3 className="email-heading">Send me an Email</h3>
        <form
          className="contact-form"
          action="https://formsubmit.co/sathwikacharyaofficial@gmail.com"
          method="POST"
        >
          <div className="form-columns">
            <div className="form-left">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="tel" name="phone" placeholder="Your Phone" required />
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-right">
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="submit-btn">Send Mail</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
