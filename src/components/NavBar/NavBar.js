import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './Navbar.css';

const NavbarInstance = () => ({
  render() {
    return (
      <section>
        <nav className="navbar has-shadow">
          <div className="navbar-brand">
            <a className="navbar-item">Logística</a>
          </div>
          <div className="navbar">
            <NavLink
              exact
              to="/"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/transportes"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Transportes</span>
            </NavLink>
            <NavLink
              to="/carga"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Carga</span>
            </NavLink>
            <NavLink
              to="/jogo/"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Jogo</span>
            </NavLink>
          </div>
        </nav>
      </section>
    );
  }
});

class NavBar extends Component {
  render() {
    return <NavbarInstance />;
  }
}

export default NavBar;
