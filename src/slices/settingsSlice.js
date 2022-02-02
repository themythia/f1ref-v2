import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    showMenu: false,
  },
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggle, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
