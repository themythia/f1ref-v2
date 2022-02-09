import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    nextRace: {},
    schedule: {},
    lastRace: {},
  },
  reducers: {
    addNextRace: (state, action) => {
      state.nextRace = action.payload;
    },
    addLastRace: (state, action) => {
      state.lastRace = action.payload;
    },
  },
});

export const { addNextRace, addLastRace } = scheduleSlice.actions;
export default scheduleSlice.reducer;
