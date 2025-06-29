import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: "getting-started-with-react",
    title: "Getting Started with React",
    date: "15 Jan",
    image: "/assets/react1.webp",
    category: " 🧩 Frontend",
    excerpt: "A beginner-friendly intro to building with React.",
    content: `
React is a powerful JavaScript library for building user interfaces. 
It uses a component-based architecture and allows developers to build reusable UI elements. 
In this blog, we'll explore how to set up a React app using Vite and write your first component.
`
  },
  {
    id: "portfolio-with-vite",
    title: "How I Built My Portfolio Using Vite",
    date: "22 Jan",
    image: "/assets/portf1.webp",
    category: " 🧠 Personal",
    excerpt: "A step-by-step walkthrough of building my portfolio using Vite.",
    content: `
I recently built my personal portfolio using Vite + React. 
This blog outlines the process, including folder structure, routing setup, and integrating projects and contact forms. 
It also covers performance benefits Vite offers during development.
`
  },
  {
    id: "top-5-dev-tools",
    title: "Top 5 Tools Every Developer Should Use",
    date: "5 Feb",
    image: "/assets/tools1.avif",
    category: " ⏳ Productivity",
    excerpt: "A curated list of tools I use to boost my daily workflow.",
    content: `
From VS Code extensions to productivity timers, these tools have significantly improved how I work. 
In this article, I highlight my top 5 developer tools and how they help me code better and faster.
`
  },
  {
    id: "nodejs-explained",
    title: "What is Node.js and Why is it Popular?",
    date: "12 Feb",
    image: "/assets/nodejs1.jpg",
    category: " ⚙️ Backend",
    excerpt: "A simple breakdown of Node.js for beginners.",
    content: `
Node.js is a JavaScript runtime that allows you to run JS on the server. 
It's popular for building scalable, real-time applications. 
In this post, we explore its core features and use cases in modern development.
`
  },
  {
    id: "internship-at-chipsy",
    title: "My Internship Experience at Chipsy",
    date: "20 Feb",
    image: "/assets/internship1.jpeg",
    category: " 🧠 Personal",
    excerpt: "A peek into my daily tasks and learnings during my internship.",
    content: `
During my internship at Chipsy Information Technology Services, 
I got the opportunity to work on real-time projects like portfolio sites, blog pages, and contact forms. 
This blog shares what I've learned so far and what's next.
`
  }
];

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {}
});

export default blogsSlice.reducer;
