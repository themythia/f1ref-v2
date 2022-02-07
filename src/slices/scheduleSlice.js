import { createSlice } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    nextRace: {},
    schedule: {},
  },
  reducers: {
    addNextRace: (state, action) => {
      state.nextRace = action.payload;
    },
  },
});

export const { addNextRace } = scheduleSlice.actions;
export default scheduleSlice.reducer;
