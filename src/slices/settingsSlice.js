import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    showMenu: false,
    unit: 'km',
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    toggleUnit: (state) => {
      state.unit = state.unit === 'km' ? 'mile' : 'km';
    },
  },
});

export const { toggleTheme, setTheme, toggleMenu, toggleUnit } =
  themeSlice.actions;
export default themeSlice.reducer;
