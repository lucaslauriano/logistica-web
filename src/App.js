import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Carga from './components/Carga/Carga';
import Transportes from './components/Transportes/Transportes';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <NavBar />
          </section>
          <Route exact path="/" component={Home} />
          <Route exact path="/transportes/:id" component={Transportes} />
          <Route exact path="/carga" component={Carga} />
        </div>
      </Router>
    );
  }
}

export default App;
