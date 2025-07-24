import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   data: [
  {
    id: 1,
    title: 'GenAI Powered Data Analytics',
    image: '/assets/tataiq.png',
    link: 'https://drive.google.com/file/d/1e9X0QaVHdXPjBnh3JIaGhHh75OfhT4HT/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Software Engineering Job Simulation',
    image: '/assets/acc.webp',
    link: 'https://drive.google.com/file/d/1vzf-qnE3h4BUOZ0iVT5ouIgsWJQ5K384/view?usp=drive_link',
  },
  {
    id: 3,
    title: 'Quantitative Research Job Simulation',
    image: '/assets/jpm.webp',
    link: 'https://drive.google.com/file/d/1XUF8aFPtLoOVqusdc_d-SCOataVL5iu7/view?usp=drive_link',
  },
  {
    id: 4,
    title: 'Data Analytics Job Simulation',
    image: '/assets/deloite.jpg',
    link: 'https://drive.google.com/file/d/1T4c2QQtm-xspQtOO48ekOsdb2j9aSAtF/view?usp=drive_link',
  },
  {
    id: 5,
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    image: '/assets/tataiq.png',
    link: 'https://drive.google.com/file/d/16K_4y6HpvC6PSarO4t_-e3MyeloESb4F/view?usp=drive_link',
  },
  {
    id: 6,
    title: 'Software Engineering Job Simulation',
    image: '/assets/EA.webp',
    link: 'https://drive.google.com/file/d/1BkzcbkrIwn4y1PSmtx08-Pt3DKH4oI_u/view?usp=drive_link',
  },
  {
    id: 7,
    title: 'Flutter For Beginners Course',
    image: '/assets/gr.png',
    link: 'https://drive.google.com/file/d/1EQ71T7M1_hIUOp6Wd0reUhoyYX_Npp55/view?usp=drive_link',
  }
],
};

const certificationSlice = createSlice({
  name: 'certification',
  initialState,
  reducers: {},
});

export default certificationSlice.reducer;
