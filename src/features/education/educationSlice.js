import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    year: "2023 - 2025",
    title: "MCA – Master of Computer Applications",
    school: "Srinivas University, Mangalore",
    link: "https://srinivasuniversity.edu.in/"
  },
  {
    year: "2019 - 2022",
    title: "BCA – Bachelor of Computer Applications",
    school: "Milagres College, Kallianpur",
    link: "https://drive.google.com/file/d/1xMjCrHaeA3rbTafgs9ijzGUJtDHkR9lH/view?usp=drive_link"
  },
  {
    year: "2017 - 2019",
    title: "PUC – Computer Science",
    school: "SMS Pre-University College, Bramhavara",
    link: "https://drive.google.com/file/d/105gn4NdB01zV52jkmguQj6Y2yI9N-CYc/view?usp=drive_link"
  },
  {
    year: "2014 - 2017",
    title: "SSLC – Secondary School",
    school: "V.K.R. Acharya Memorial High School, Kunjal",
    link: "https://drive.google.com/file/d/1F6jabdymiKp-aWuDBtzYNoPRi5Th0nFr/view?usp=drive_link"
  }
];

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {}
});

export default educationSlice.reducer;
