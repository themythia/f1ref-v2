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
    addSchedule: (state, action) => {
      state.schedule = action.payload;
    },
    addResults: (state, action) => {
      state.schedule[action.payload.round - 1].results = action.payload.results;
    },
  },
});

export const { addNextRace, addLastRace, addSchedule, addResults } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;
