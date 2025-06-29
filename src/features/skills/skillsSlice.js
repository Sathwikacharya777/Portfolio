// src/redux/slices/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { name: "Python", icon: "FaPython", color: "#3776AB", href: "https://www.python.org/" },
  { name: "JavaScript", icon: "FaJsSquare", color: "#F7DF1E", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Node.js", icon: "FaNodeJs", color: "#68A063", href: "https://nodejs.org/" },
  { name: "React", icon: "FaReact", color: "#61DAFB", href: "https://reactjs.org/" },
  { name: "HTML", icon: "FaHtml5", color: "#e34c26", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: "FaCss3Alt", color: "#264de4", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "SQL", icon: "SiMysql", color: "#00758f", href: "https://www.mysql.com/" },
  { name: "Canva", icon: "SiCanva", color: "#00C4CC", href: "https://www.canva.com/" },
  { name: "Selenium", icon: "SiSelenium", color: "#43B02A", href: "https://www.selenium.dev/" },
  { name: "MongoDB", icon: "SiMongodb", color: "#4DB33D", href: "https://www.mongodb.com/" },
  { name: "Git", icon: "FaGitAlt", color: "#F05032", href: "https://git-scm.com/" },
  { name: "Java", icon: "FaJava", color: "#007396", href: "https://www.oracle.com/java/" },
  { name: "C++", icon: "TbBrandCpp", color: "#00599C", href: "https://cplusplus.com/" },
  { name: "Vite", icon: "SiVite", color: "#646CFF", href: "https://vitejs.dev/" },
  { name: "React Router", icon: "SiReactrouter", color: "#CA4245", href: "https://reactrouter.com/" },
  { name: "Redux", icon: "SiRedux", color: "#764ABC", href: "https://redux.js.org/" },
  { name: "Express", icon: "SiExpress", color: "#000000", href: "https://expressjs.com/" },
  { name: "API", icon: "BiCodeAlt", color: "#00ADB5", href: "https://developer.mozilla.org/en-US/docs/Web/API" },
  { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00", href: "https://www.tensorflow.org/" },
  { name: "Flask", icon: "SiFlask", color: "#000000", href: "https://flask.palletsprojects.com/" }
];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {}
});

export default skillsSlice.reducer;
