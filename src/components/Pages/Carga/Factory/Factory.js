import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import Shortid from 'shortid';

import './Factory.css';
import Truck from './Truck/Truck';

class Factory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargo: [
        {
          idTruck: Shortid.generate(),
          fridge: 4,
          stove: 4,
          oven: 4,
          weight: 340
        },
        {
          idTruck: Shortid.generate(),
          fridge: 4,
          stove: 4,
          oven: 4,
          weight: 340
        }
      ]
    };

    console.log('FACTORY', this.state.cargo, this.props, this, props);
  }

  componentDidMount() {
    /*  this.setState({cargo: ['1']  });
        let a = this.props.loadTruck();
        console.log('AAAAAA', a) */
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
