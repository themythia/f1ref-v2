import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {
    addNews: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { addNews } = newsSlice.actions;
export default newsSlice.reducer;
