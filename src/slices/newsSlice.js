import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {
    addNews: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addNews } = newsSlice.actions;
export default newsSlice.reducer;
