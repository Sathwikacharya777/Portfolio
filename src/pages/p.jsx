// File: src/pages/Projects.jsx
import React from "react";
import "../styles/Projects.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Projects() {
  const projects = useSelector((state) => state.projects);

  return (
    <section className="projects-section">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: -60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>
      
      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, scale: 0.85, rotateX: -15 },
              visible: {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="project-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <p>{project.Builtfor}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>


  );
}

export default Projects;
