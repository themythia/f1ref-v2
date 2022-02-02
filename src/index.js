import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import themeReducer from './slices/themeSlice';
import ThemeWrapper from './components/ThemeWrapper';

const store = configureStore({
  reducer: {
    theme: themeReducer,
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
