// src/features/experience/experienceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    role: "React Developer Intern",
    company: "Chipsy Information Technology Services Pvt Ltd.",
    period: "June 2025 - Aug 2025",
    logo: "/assets/chipsy.jpeg",
    link: "https://drive.google.com/file/d/1eCAbvAKI8QhS3vlvl0qlkmmFzQD9_DBQ/view?usp=drive_link"
  },
  {
    id: 2,
    role: "Python Programming Intern",
    company: "CodSoft",
    period: "Jan 2025 - Feb 2025",
    logo: "/assets/codsoft.jpg",
    link: "https://drive.google.com/file/d/1jDZqrrbQwxNgOsSGo5OKTeGrF_8PiAEj/view?usp=drive_link"
  }
  // ,
  // {
  //   id: 3,
  //   role: "GenAI Powered Data Analytics",
  //   company: "Tata iQ (via Forage)",
  //   period: "July 2025 - Completed",
  //   logo: "/assets/tataiq.png",
  //   link: "https://drive.google.com/file/d/1e9X0QaVHdXPjBnh3JIaGhHh75OfhT4HT/view?usp=drive_link"
  // },
  // {
  //   id: 4,
  //   role: " Data	Visualisation:	Empowering	Business with	Effective	Insights",
  //   company: "Tata iQ (via Forage)",
  //   period: "July 2025 - Completed",
  //   logo: "/assets/tataiq.png",
  //   link: "https://drive.google.com/file/d/16K_4y6HpvC6PSarO4t_-e3MyeloESb4F/view?usp=drive_link"
  // },
  // {
  //   id: 5,
  //   role: "Flutter For Beginners Course",
  //   company: "Great Learning",
  //   period: "Mar 2025 - May 2025",
  //   logo: "/assets/gr.png",
  //   link: "https://drive.google.com/file/d/1EQ71T7M1_hIUOp6Wd0reUhoyYX_Npp55/view?usp=drive_link"
  // }
];

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {}
});

export default experienceSlice.reducer;
