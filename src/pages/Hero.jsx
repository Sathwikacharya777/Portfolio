// File: src/pages/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import TypedIntro from "../components/TypedIntro"; 
import { FaPalette, FaBriefcase, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import { useSelector } from "react-redux";

function Hero() {
  const experience = useSelector((state) => state.experience);

  return (
    <>
      <section className="hero-container">
        <div className="hero-left">
          <h1>Sathwik</h1>
          <h2>Acharya</h2>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <TypedIntro />
          </div>
          <div className="link-buttons">
            <a href="/project" className="details-link">
              MY WORKS <span className="arrow">→</span>
            </a>
            <a href="/contact" className="details-link">
              CONTACT <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/assets/hero.png" alt="New Sathwik Hero" />
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon-circle"><FaLayerGroup /></div>
            <div>
              <h3>Web Design</h3>
              <p>
                Creating visually appealing, user-friendly web designs that combine form and function
                to ensure optimal user experience across all devices and platforms.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-circle"><FaBriefcase /></div>
            <div>
              <h3>Web Development</h3>
              <p>
                Building responsive, high-performance websites using modern technologies like React,
                Node.js, and Express — tailored to your business goals and scalable for future growth.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-circle"><FaLaptopCode /></div>
            <div>
              <h3>Brand & Logo Design</h3>
              <p>
                Designing distinctive logos and brand identities that resonate with your target audience
                and leave a lasting impression, helping your brand stand out in a competitive market.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-circle"><FaPalette /></div>
            <div>
              <h3>UI/UX Design</h3>
              <p>
                Crafting intuitive and aesthetically pleasing user experiences through wireframes,
                prototypes, and user-centered interface designs that enhance usability and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="work-experience-section">
      <h1 className="work-title">Work Experience.</h1>
      <h2 className="work-heading">What I've Done So Far</h2>
      <div className="timeline-container">
        {experience.map((item, index) => (
          <div className="timeline-row" key={item.id}>
            {index % 2 === 0 ? (
              <>
                <div className="timeline-box left-box">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="period">{item.period}</p>
                  </a>
                </div>
                <div className="timeline-center">
                  <div className="timeline-circle">
                    <img src={item.logo} alt={item.company} />
                  </div>
                  {/* <span className="period">{item.period}</span> */}
                </div>
                <div className="timeline-box empty-box" />
              </>
            ) : (
              <>
                <div className="timeline-box empty-box" />
                <div className="timeline-center">
                  <div className="timeline-circle">
                    <img src={item.logo} alt={item.company} />
                  </div>
                </div>
                <div className="timeline-box right-box">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="period">{item.period}</p>
                  </a>
                </div>
              </>
              
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Hero;
