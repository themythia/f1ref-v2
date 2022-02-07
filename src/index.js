import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import settingsReducer from './slices/settingsSlice';
import newsReducer from './slices/newsSlice';
import scheduleReducer from './slices/scheduleSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    news: newsReducer,
    schedule: scheduleReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
