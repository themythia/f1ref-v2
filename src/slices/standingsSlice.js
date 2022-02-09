import { createSlice } from '@reduxjs/toolkit';

export const standingsSlice = createSlice({
  name: 'standings',
  initialState: {
    drivers: [],
    constructors: [],
  },
  reducers: {
    addDriverStandings: (state, action) => {
      state.drivers.push(...action.payload);
    },
    addConstructorStandings: (state, action) => {
      state.constructors.push(...action.payload);
    },
    addStandings: (state, action) => {
      return (state = action.payload);
      // state.drivers.push(...action.payload.drivers);
      // state.constructors.push(...action.payload.constructors);
    },
  },
});

export const { addDriverStandings, addConstructorStandings, addStandings } =
  standingsSlice.actions;
export default standingsSlice.reducer;
