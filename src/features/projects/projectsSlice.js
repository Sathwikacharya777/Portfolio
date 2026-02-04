// File: src/features/projects/projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: "Linear UI Clone",
    category: "Frontend(Next.js)",
    image: "/assets/linear-clone.png",
    Builtfor: "Practicing modern SaaS UI design with smooth animations and clean layouts",
    link: " https://linear-clone-jade.vercel.app/"
  },
    {
    title: "Google Maps Place Detail UI Clone",
    category: "Frontend(Next.js)",
    image: "/assets/google-map.jpg",
    Builtfor: "Replicating real-world location-based place details UI with responsive layout and clean components",
    link: "https://google-maps-clone-uoo5.vercel.app"
  },
  {
    title: "Tourism Management System",
    category: "Fullstack",
    image: "/assets/bg_4.jpg", 
    Builtfor: "Travel agencies, tour operators, and customers for seamless booking and management",
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
    Builtfor: "Online footwear retailers and customers for smooth shopping experience",
    link: "https://github.com/Sathwikacharya777/Footwear_Zone-"
  },
  {
    title: "Panto Furniture Landing",
    category: "Frontend(React.js)",
    image: "/assets/landing.jpg",
    Builtfor: "Furniture brands and businesses to showcase products and attract customers",
    link: "https://panto-furniture-three.vercel.app/"
  },
  {
    title: "E-commerce Website",
    category: "Frontend(React.js)",
    image: "/assets/bg2.webp",
    Builtfor: "Small businesses and startups for online product showcasing and sales",
    link: "https://github.com/Sathwikacharya777/Ecommerce_Frontend_React"
  }
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {}
});

export default projectsSlice.reducer;
