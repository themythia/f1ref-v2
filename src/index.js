import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import settingsReducer from './slices/settingsSlice';
import newsReducer from './slices/newsSlice';
import scheduleReducer from './slices/scheduleSlice';
import standingsReducer from './slices/standingsSlice';
import driversReducer from './slices/driversSlice';
import teamsReducer from './slices/teamsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    news: newsReducer,
    schedule: scheduleReducer,
    standings: standingsReducer,
    drivers: driversReducer,
    teams: teamsReducer,
  },
});

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// new in react 18
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
