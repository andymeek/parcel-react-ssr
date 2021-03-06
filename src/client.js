import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const element = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  element
);

if (module.hot) {
  module.hot.accept();
}
