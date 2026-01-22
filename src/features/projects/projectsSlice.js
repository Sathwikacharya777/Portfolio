// File: src/features/projects/projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: "Tourism Management System",
    category: "Fullstack",
    image: "/assets/bg_4.jpg", // Ensure this file exists in /public/assets
    link: "https://github.com/Sathwikacharya777/Tourism_Management_System"
  },
  {
    title: "Pneumonia Detection",
    category: "Deep Learning",
    image: "/assets/bg5.jpg",
    Builtfor: "Medical professionals + early diagnosis support",
    link: ""
  },
  {
    title: "Footwear Zone",
    category: "Fullstack",
    image: "/assets/bg3.jpg",
    link: "https://github.com/Sathwikacharya777/Footwear_Zone-"
  },
  {
    title: "Panto Furniture Landing",
    category: "Frontend",
    image: "/assets/landing.jpg",
    link: "https://panto-furniture-three.vercel.app"
  },
  {
    title: "E-commerce Website",
    category: "Frontend",
    image: "/assets/bg2.webp",
    link: "https://github.com/Sathwikacharya777/Ecommerce_Frontend_React"
  }
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {}
});

export default projectsSlice.reducer;
