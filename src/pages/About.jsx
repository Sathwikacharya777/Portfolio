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
import { motion } from "framer-motion";

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
      <motion.h2
        className="about-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-main"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            I'm a <strong>{name}</strong> a full-stack developer who helps businesses, startups, and individuals turn their ideas into fully functional, high-performance web applications. I specialize in building clean, responsive, and user-friendly interfaces using React, Tailwind CSS, and modern JavaScript frameworks.
          </p>
          <p>
            Along with frontend development, I also work on backend technologies like Node.js and Python, allowing me to deliver complete end-to-end solutions from UI design to server-side logic and API integrations. I’ve worked on real-world projects including an AI-based pneumonia detection system and a fully functional e-commerce platform.
          </p>
          <p>
             Whether you need a fast landing page, a portfolio site, or a complete web application, I focus on writing efficient code, solving real problems, and delivering results that match your goals not just the requirements.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1Y8sCByUp8xU3HjbLLyUFNHHQFXr5Sb7M/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src="/assets/sathu01.jpg"
            alt="Profile"
            className="profile-img"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <motion.img
            src="/assets/signature.png"
            alt="Signature"
            className="signature-img"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />

          <motion.h3
            className="author-name"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {name}
          </motion.h3>
        </motion.div>
      </motion.div>

      <section className="skills-section">
        <motion.h2
          className="skills-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Professional <span>Skillset</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-box"
              title={skill.name}
              style={{ color: skill.color }}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="skill-icon"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
              >
                {iconMap[skill.icon]}
              </motion.div>
              <p className="skill-name">{skill.name}</p>
            </motion.a>
          ))}
        </motion.div>
      </section>

      
      <section className="education-section">
        <motion.h2
          className="education-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Education
        </motion.h2>
              
        <motion.div
          className="education-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {educationList.map((edu, index) => (
            <motion.a
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="education-box"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="education-item">
                <motion.div
                  className="education-icon"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  <FaAward size={36} />
                </motion.div>
                <div>
                  <p className="edu-year">{edu.year}</p>
                  <h3 className="edu-title">{edu.title}</h3>
                  <p className="edu-school">{edu.school}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>


    </section>
  );
}

export default About;




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