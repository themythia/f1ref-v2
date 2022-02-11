import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import settingsReducer from './slices/settingsSlice';
import newsReducer from './slices/newsSlice';
import scheduleReducer from './slices/scheduleSlice';
import standingsReducer from './slices/standingsSlice';
import driversReducer from './slices/driversSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    news: newsReducer,
    schedule: scheduleReducer,
    standings: standingsReducer,
    drivers: driversReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
