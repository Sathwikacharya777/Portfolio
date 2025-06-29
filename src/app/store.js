// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import skillsReducer from '../features/skills/skillsSlice'; 
import educationReducer from '../features/education/educationSlice';
import projectsReducer from '../features/projects/projectsSlice';
import blogsReducer from '../features/blogs/blogsSlice'; 
import experienceReducer from '../features/experience/experienceSlice'; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    skills: skillsReducer, 
    education: educationReducer, 
    projects: projectsReducer,
    blogs: blogsReducer, 
    experience: experienceReducer,
  },
});
