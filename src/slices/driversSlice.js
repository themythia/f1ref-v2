import { createSlice } from '@reduxjs/toolkit';

export const driversSlice = createSlice({
  name: 'drivers',
  initialState: [],
  reducers: {
    addDrivers: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addDrivers } = driversSlice.actions;
export default driversSlice.reducer;
