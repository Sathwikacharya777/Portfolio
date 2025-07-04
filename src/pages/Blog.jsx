// File: src/pages/Blog.jsx
import React from "react";
import { useSelector } from "react-redux";
import "../styles/Blog.css";
import { motion } from "framer-motion";


const blogCardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Blog() {
  const blogs = useSelector((state) => state.blogs);

  return (
    <section className="blog-page">
  <motion.h2
    className="blog-heading"
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    My Blog
  </motion.h2>

  <div className="blog-grid">
    {blogs.map((blog) => (
      <motion.div
        className="blog-card"
        key={blog.id}
        variants={blogCardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="blog-image">
          <motion.img
            src={blog.image}
            alt={blog.title}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="blog-date"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>{blog.date.split(" ")[0]}</span>
            <small>{blog.date.split(" ")[1]}</small>
          </motion.div>
        </div>
        <div className="blog-content">
          <h2>{blog.title}</h2>
          <p>{blog.category}</p>
          <p><strong>{blog.excerpt}</strong></p>
          <p>{blog.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  );
}

export default Blog;
