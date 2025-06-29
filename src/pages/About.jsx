// File: src/pages/About.jsx
import React from "react";
import "../styles/About.css";
import { FaAward } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {
  FaReact, FaNodeJs, FaJsSquare, FaPython, FaGitAlt,
  FaHtml5, FaCss3Alt, FaJava
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiSelenium
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiVite, SiReactrouter, SiRedux, SiExpress,
  SiTensorflow, SiFlask
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { SiCanva } from "react-icons/si";

const iconMap = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaJsSquare: <FaJsSquare />,
  FaPython: <FaPython />,
  FaGitAlt: <FaGitAlt />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJava: <FaJava />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiSelenium: <SiSelenium />,
  TbBrandCpp: <TbBrandCpp />,
  SiVite: <SiVite />,
  SiReactrouter: <SiReactrouter />,
  SiRedux: <SiRedux />,
  SiExpress: <SiExpress />,
  SiTensorflow: <SiTensorflow />,
  SiFlask: <SiFlask />,
  BiCodeAlt: <BiCodeAlt />,
  SiCanva: <SiCanva />
};

function About() {
  const name = useSelector(state => state.user.name);
  const skills = useSelector((state) => state.skills);
  const educationList = useSelector((state) => state.education);

  return (
    <section className="about-section">
      <h2 className="about-heading">About Me</h2>
      <div className="about-main">
        <div className="about-left">
          <p>
            I'm <strong>{name}</strong>, a passionate and creative web developer who loves turning ideas into real-world, functional websites and applications. My core strength lies in designing clean, responsive user interfaces using React and CSS while ensuring a smooth user experience.
          </p>
          <p>
            In addition to frontend development, I’ve also worked on backend technologies like Node.js and Python, including real-world projects such as a Pneumonia Detection AI system and a full-fledged e-commerce platform. I enjoy solving problems, writing efficient code, and learning new technologies to stay ahead in the ever-evolving tech space.
          </p>
          <p>
            I’m currently completing my Master’s in Computer Applications while gaining real-time experience through internships. I strive to deliver professional-quality results, whether it's a dynamic portfolio website or a data-driven medical application, and I'm excited to contribute to meaningful projects in the tech industry.
          </p>
        <a
          href="https://drive.google.com/file/d/1bEyuRLt-icPFSFNgW344OUC4C4LZRDxh/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv-btn"
        >
          Download CV
        </a>
        </div>

        <div className="about-right">
          <img src="/assets/sathu01.jpg" alt="Profile" className="profile-img" />
          <img src="/assets/signature.png" alt="Signature" className="signature-img" />
          <h3 className="author-name">{name}</h3>
        </div>
      </div>

      {/* <section className="skills-section">
        <h2>Professional <span>Skillset</span></h2>
        <div className="education-grid">
          {educationList.map((edu, index) => (
            <a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="education-box"
            >
              <h3>{edu.year}</h3>
              <h4>{edu.title}</h4>
              <p>{edu.school}</p>
            </a>
          ))}
        </div>
      </section> */}
      <section className="skills-section">
        <h2 className="skills-heading">Professional <span>Skillset</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-box"
              title={skill.name}
              style={{ color: skill.color }}
            >
              <div className="skill-icon">{iconMap[skill.icon]}</div>
              <p className="skill-name">{skill.name}</p>
            </a>
          ))}
        </div>
      </section>
      
      <section className="education-section">
        <h2 className="education-heading">Education</h2>
        <div className="education-grid">
          {educationList.map((edu, index) => (
            <a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="education-box"
            >
            <div className="education-item" key={index}>
              <div className="education-icon">
                <FaAward size={36} />
              </div>
              <div>
                <p className="edu-year">{edu.year}</p>
                <h3 className="edu-title">{edu.title}</h3>
                <p className="edu-school">{edu.school}</p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </section>

    </section>
  );
}

export default About;
