import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Transportes from './components/Transportes/Transportes';
import Carga from './components/Carga/Carga';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <NavBar />
          </section>
          <Route exact path="/" component={Home} />
          <Route exact path="/transportes" component={Transportes} />
          <Route exact path="/carga" component={Carga} />
        </div>
      </Router>
    );
  }
}

export default App;
