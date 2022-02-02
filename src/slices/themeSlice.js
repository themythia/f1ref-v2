import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggle: (state) => (state = state === 'light' ? 'dark' : 'light'),
    setTheme: (state, action) => (state = action.payload),
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
