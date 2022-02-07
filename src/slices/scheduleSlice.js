import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    nextRace: {},
    schedule: {},
  },
  reducers: {
    getNextRace: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { getNextRace } = scheduleSlice.actions;
export default scheduleSlice.reducer;
