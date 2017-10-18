import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home/Home';

ReactDOM.render(
  <Router basename="/">
    <App>
      <Route path="/" exact render={props => <Home {...props} />} />
    </App>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
