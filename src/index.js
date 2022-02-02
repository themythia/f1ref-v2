import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import settingsReducer from './slices/settingsSlice';
import ThemeWrapper from './components/ThemeWrapper';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>,
  document.getElementById('root')
);
