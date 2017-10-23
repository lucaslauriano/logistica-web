import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
/* import Shortid from 'shortid'; */

import './Factory.css';
import Truck from './Truck/Truck';

class Factory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargo: this.props
    };

    console.log('factpry', this.state.cargo, this.props);
  }

  render() {
    return (
      <Panel>
        {this.state.cargo.map(cargo => (
          <Truck key={cargo.idTruck} target={cargo.idTruck} />
        ))}
      </Panel>
    );
  }
}

export default Factory;

Factory.propTypes = {
  allTruck: PropTypes.number
};
