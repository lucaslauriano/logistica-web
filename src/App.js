import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/Layout/NavBar/NavBar';

import Home from './components/Pages/Home/Home';
import Carga from './components/Pages/Carga/Carga';
import Transportes from './components/Pages/Transportes/Transportes';

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
