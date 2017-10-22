import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Panel,
  Col,
  Button
} from 'react-bootstrap';

import _ from 'lodash';
import './Expedition.css';

const truckWeight = 300;

class Expedition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cargo: [],
      isLoading: false,
      redirect: false,
      truckWeight: 300,
      truck: 1,
      viagem: 0
    };

    this.hasTruck = this.hasTruck.bind(this);
    this.loadTruck = this.loadTruck.bind(this);
    this.getItemWeight = this.getItemWeight.bind(this);
    this.getTotalWeght = this.getTotalWeght.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  getItemWeight(key, value) {
    let weight;

    if (key === 'fridge') {
      weight = value * 50;
    } else if (key === 'stove') {
      weight = value * 20;
    } else if (key === 'oven') {
      weight = value * 15;
    }

    return weight;
  }

  getTotalWeght(data, weight, method) {
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

    totalWeight = this.getTotalWeght(
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
      fridge: this.inputFridge.value,
      stove: this.inputStove.value,
      oven: this.inputOven.value
    };

    this.setState({
      isLoading: false,
      viagem: this.getAllTruck(totalCargo)
    });
  }

  render() {
    return (
      <Panel bsStyle="container">
        <Form horizontal>
          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={2}>
              Geladeiraa
            </Col>
            <Col sm={10}>
              <FormControl
                inputRef={fridge => (this.inputFridge = fridge)}
                type="number"
                placeholder="Quantidade"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={2}>
              Fogões
            </Col>
            <Col sm={10}>
              <FormControl
                inputRef={stove => (this.inputStove = stove)}
                type="number"
                placeholder="Quantidade"
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="">
            <Col componentClass={ControlLabel} sm={2}>
              Fornos
            </Col>
            <Col sm={10}>
              <FormControl
                inputRef={oven => (this.inputOven = oven)}
                type="number"
                placeholder="Quantidade"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button bsStyle="primary" onClick={this.loadTruck} type="button">
                Carregar
              </Button>
            </Col>
          </FormGroup>
        </Form>
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
