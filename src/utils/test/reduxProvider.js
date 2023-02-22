import { combineReducers, configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../../slices/settingsSlice';
import newsReducer from '../../slices/newsSlice';
import scheduleReducer from '../../slices/scheduleSlice';
import standingsReducer from '../../slices/standingsSlice';
import driversReducer from '../../slices/driversSlice';
import teamsReducer from '../../slices/teamsSlice';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

const rootReducer = combineReducers({
  settings: settingsReducer,
  news: newsReducer,
  schedule: scheduleReducer,
  standings: standingsReducer,
  drivers: driversReducer,
  teams: teamsReducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export function renderWithProviders(ui) {
  function Wrapper({ children }) {
    return <Provider store={setupStore}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { setupStore, ...render(ui, { wrapper: Wrapper }) };
}
