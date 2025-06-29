// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Sathwik Acharya', 
  },
  reducers: {}
});

export default userSlice.reducer;
