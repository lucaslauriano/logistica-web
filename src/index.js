import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
