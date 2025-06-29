// File: src/pages/Blog.jsx
import React from "react";
import { useSelector } from "react-redux";
import "../styles/Blog.css";

function Blog() {
  const blogs = useSelector((state) => state.blogs);

  return (
    <section className="blog-page">
      <h2 className="blog-heading">My Blog</h2>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-date">
                <span>{blog.date.split(" ")[0]}</span>
                <small>{blog.date.split(" ")[1]}</small>
              </div>
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.category}</p>
              <p><strong>{blog.excerpt}</strong></p>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
