import { createSlice } from '@reduxjs/toolkit';

export const driversSlice = createSlice({
  name: 'drivers',
  initialState: [],
  reducers: {
    addDrivers: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { addDrivers } = driversSlice.actions;
export default driversSlice.reducer;
