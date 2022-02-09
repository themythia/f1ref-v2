import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    showMenu: false,
    unit: 'km',
    hideLastRace: true,
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
    toggleLastRace: (state) => {
      state.hideLastRace = !state.hideLastRace;
    },
  },
});

export const { toggleTheme, setTheme, toggleMenu, toggleUnit, toggleLastRace } =
  themeSlice.actions;
export default themeSlice.reducer;
