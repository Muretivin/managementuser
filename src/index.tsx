// src/index.tsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <StrictMode>

  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
  document.getElementById('root')
);
