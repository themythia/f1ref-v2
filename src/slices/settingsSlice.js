import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light',
    showMenu: false,
    unit: 'km',
    hideLastRace: true,
    selector: {
      nextRace: 0,
      standings: 0,
      racePage: 0,
      driverPage: 0,
      teamPage: 0,
    },
    selectorSize: {
      nextRace: false,
      standings: false,
      racePage: false,
      driverPage: false,
      teamPage: false,
    },
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
    setSelector: (state, action) => {
      state.selector[action.payload.type] = action.payload.index;
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  toggleMenu,
  toggleUnit,
  toggleLastRace,
  setSelector,
} = themeSlice.actions;
export default themeSlice.reducer;
