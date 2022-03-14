import { createSlice } from '@reduxjs/toolkit';

export const driversSlice = createSlice({
  name: 'drivers',
  initialState: [],
  reducers: {
    addDrivers: (state, action) => {
      state = action.payload;
      return state;
    },
    addDriverStats: (state, action) => {
      const index = state.findIndex(
        (driver) => driver.id === action.payload.id
      );

      // manually adds championship stat
      const champ =
        action.payload.id === 'hamilton'
          ? 7
          : action.payload.id === 'vettel'
          ? 4
          : action.payload.id === 'max_verstappen'
          ? 1
          : action.payload.id === 'alonso'
          ? 2
          : action.payload.id === 'raikkonen'
          ? 1
          : 0;

      state[index].stats = {
        ...action.payload.stats,
        career: {
          ...action.payload.stats.career,
          champ,
        },
      };
    },
  },
});

export const { addDrivers, addDriverStats } = driversSlice.actions;
export default driversSlice.reducer;
