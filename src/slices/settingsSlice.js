import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    showMenu: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleMenu: (state) => {
      state.showMenu = state.showMenu === false ? true : false;
    },
  },
});

export const { toggleTheme, setTheme, toggleMenu } = themeSlice.actions;
export default themeSlice.reducer;
