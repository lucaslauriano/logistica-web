import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form, Panel } from 'react-bootstrap';

import './Expedition.css';
import api from '../../../../api/api';
import ButtonAdd from '../../../common/ButtonAdd/ButtonAdd';
import InputQtd from '../../../common/InputQtd/InputQtd';

const truckWeight = 300;

class Expedition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cargo: [],
      isLoading: false,
      redirect: false,
      truckWeight: 300,
      weight: '',
      truck: 1,
      viagem: 0
    };

    this.hasTruck = this.hasTruck.bind(this);
    this.loadTruck = this.loadTruck.bind(this);
    this.getItemWeight = this.getItemWeight.bind(this);
    this.getTotalWeight = this.getTotalWeight.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  getItemWeight(key, value) {
    let weight;
    weight = api.getItemWeight(key, value);
    return weight;
  }

  getTotalWeight(data, weight, method) {
    _.forIn(data, function(value, key) {
      weight = weight + method(key, value);
    });

    return weight;
  }

  hasTruck(a, allTruck) {
    if (a > 1) {
      for (var index = 0; index <= a; index++) {
        allTruck = index;
      }
      return allTruck;
    }
  }

  getAllTruck(totalCargo) {
    let totalWeight = 0;
    let allTruck = 1;
    let a;

    totalWeight = this.getTotalWeight(
      totalCargo,
      totalWeight,
      this.getItemWeight
    );
    a = totalWeight / truckWeight;
    this.hasTruck(a, allTruck);

    console.log('Peso Total: ', totalWeight, a);
    console.log(allTruck, ' Caminhões');

    return allTruck;
  }

  loadTruck() {
    const totalCargo = {
      fridge: this.inputFridge.inputRef.value,
      stove: this.inputStove.inputRef.value,
      oven: this.inputOven.inputRef.value
    };

    console.log(totalCargo.fridge);

    this.setState({
      isLoading: false,
      viagem: this.getAllTruck(totalCargo)
    });
  }

  render() {
    return (
      <Panel bsStyle="container">
        <Form horizontal>
          <InputQtd label="Geladeira" ref={ref => (this.inputFridge = ref)} />
          <InputQtd label="Fogão" ref={ref => (this.inputStove = ref)} />
          <InputQtd label="Forno" ref={ref => (this.inputOven = ref)} />
        </Form>
        <ButtonAdd className="button-mg-bottom" loadTruck={this.loadTruck} />
      </Panel>
    );
  }
}

export default Expedition;

Expedition.propTypes = {
  fridge: PropTypes.number,
  stove: PropTypes.number,
  oven: PropTypes.number,
  allTruck: PropTypes.number
};
