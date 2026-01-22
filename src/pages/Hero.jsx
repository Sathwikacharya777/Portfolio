// File: src/pages/Hero.jsx
import React from "react";
import "../styles/Hero.css";
import TypedIntro from "../components/TypedIntro"; 
import { FaPalette, FaBriefcase, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const timelineContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
};

const certificationGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const certificationCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


function Hero() {
  const experience = useSelector((state) => state.experience);
  const certifications = useSelector((state) => state.certification.data);

  return (
    <>
      <section className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -100 }}  // Start from left
          animate={{ opacity: 1, x: 0 }}     // Move to original position
          whileHover={{ scale: 1.05 }}       // Slight zoom on hover
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>Sathwik</h1>
          <h2>Acharya</h2>

          <div className="container">
            <TypedIntro />
          </div>

          <div className="link-buttons">
            <motion.a
              href="/project"
              className="details-link"
              whileHover={{ scale: 1.10, backgroundColor: "#dc3b71" }}
              transition={{ duration: 0.3 }}
            >
              MY WORKS <span className="arrow">→</span>
            </motion.a>

            <motion.a
              href="/contact"
              className="details-link"
              whileHover={{ scale: 1.10, backgroundColor: "#dc3b71" }}
              transition={{ duration: 0.3 }}
            >
              LET’S WORK TOGATHER <span className="arrow">→</span>
            </motion.a>
          </div>
        </motion.div>
        <div className="hero-right">
          <motion.img
            src="/assets/hero.png"
            alt="New Sathwik Hero"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileHover={{ scale: 1.20 }}
          />
        </div>

      </section>

      <section className="services-section">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h2>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div className="service-card" variants={cardVariants}>
            <div className="icon-circle"><FaLayerGroup /></div>
            <div>
              <h3>Web Design</h3>
              <p>
                Creating visually appealing, user-friendly web designs that combine form and function
                to ensure optimal user experience across all devices and platforms.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="service-card" variants={cardVariants}>
            <div className="icon-circle"><FaBriefcase /></div>
            <div>
              <h3>Web Development</h3>
              <p>
                Building responsive, high-performance websites using modern technologies like React,
                Node.js, and Express — tailored to your business goals and scalable for future growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="service-card" variants={cardVariants}>
            <div className="icon-circle"><FaLaptopCode /></div>
            <div>
              <h3>Brand & Logo Design</h3>
              <p>
                Designing distinctive logos and brand identities that resonate with your target audience
                and leave a lasting impression, helping your brand stand out in a competitive market.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="service-card" variants={cardVariants}>
            <div className="icon-circle"><FaPalette /></div>
            <div>
              <h3>UI/UX Design</h3>
              <p>
                Crafting intuitive and aesthetically pleasing user experiences through wireframes,
                prototypes, and user-centered interface designs that enhance usability and engagement.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="work-experience-section">
        <motion.h1
          className="work-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5 }}
        >
          Internship and Work Experience.
        </motion.h1>

        <motion.h2
          className="work-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What I've Done So Far
        </motion.h2>

        <motion.div
          className="timeline-container"
          variants={timelineContainer}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.01,
            // boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item, index) => (
            <motion.div className="timeline-row" key={item.id} variants={timelineItem}>
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="timeline-box left-box"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="period">{item.period}</p>
                    </a>
                  </motion.div>
              
                  <motion.div className="timeline-center" variants={scaleVariant}>
                    <motion.div
                      className="timeline-circle"
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src={item.logo}
                        alt={item.company}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />

                    </motion.div>
                  </motion.div>
              
                  <div className="timeline-box empty-box" />
                </>
              ) : (
                <>
                  <div className="timeline-box empty-box" />
              
                  <motion.div className="timeline-center" variants={scaleVariant}>
                    <motion.div
                      className="timeline-circle"
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src={item.logo}
                        alt={item.company}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
              
                  <motion.div
                    className="timeline-box right-box"
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="period">{item.period}</p>
                    </a>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
    </section>
    <section className="certification-section">
      <motion.h1
        className="certification-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Certifications
      </motion.h1>
      <motion.h2
          className="work-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What I've Learned So Far
        </motion.h2>

      <motion.div
        className="certification-grid"
        variants={certificationGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            variants={certificationCardVariants}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
              transition: { duration: 0.4 },
            }}
          >
            <motion.div
              className="cert-circle"
              whileHover={{
                y: [0, -8, 0],     // Smooth floating
                rotate: [0, 10, -10, 10, 0], // clockwise ➝ anticlockwise ➝ clockwise ➝ reset // Clockwise twist and reset
                scale: 1.1,        // Slight zoom
                zIndex: 10,
                transition: {
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
              initial={{ y: 0, rotate: 0, scale: 1 }} // Start position
            >
              <img src={cert.image} alt={cert.title} />
            </motion.div>




            <div className="cert-info">
              <p className="cert-number">--0{index + 1}--</p>
              <h4 className="cert-title">— TITLE —</h4>
              <p className="cert-desc">{cert.title}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>

    </>
  );
}

export default Hero;
