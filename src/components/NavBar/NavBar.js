import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const NavbarInstance = () => ({
  render() {
    return (
      <section>
        <nav className="navbar has-shadow">
          <div className="navbar-brand">
            <a className="navbar-item">Logística</a>
          </div>
          <div className="navbar container">
            <NavLink
              exact
              to="/"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/carga"
              className="navbar-item  is-tab"
              activeClassName="is-active"
            >
              <span>Carga</span>
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
