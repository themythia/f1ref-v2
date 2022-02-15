import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: [],
  reducers: {
    addTeams: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addTeams } = teamsSlice.actions;
export default teamsSlice.reducer;
