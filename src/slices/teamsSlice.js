import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: [],
  reducers: {
    addTeams: (state, action) => {
      state = action.payload;
      return state;
    },
    addTeamStats: (state, action) => {
      const index = state.findIndex((team) => team.id === action.payload.id);

      const champ =
        action.payload.id === 'ferrari'
          ? 16
          : action.payload.id === 'mercedes'
          ? 8
          : action.payload.id === 'red_bull'
          ? 5
          : action.payload.id === 'mclaren'
          ? 8
          : action.payload.id === 'williams'
          ? 9
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

export const { addTeams, addTeamStats } = teamsSlice.actions;
export default teamsSlice.reducer;
