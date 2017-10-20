import React, { Component } from 'react';
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
      truck: 1
    };

    this.loadTruck = this.loadTruck.bind(this);
    this.getItemWeight = this.getItemWeight.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  getItemWeight(item, weight) {
    let _weight = item * weight;
    return _weight;
  }

  getWeight(totalCargo) {
    let f = totalCargo.fridge;
    let peso = 0;

    let getItemWeight = (item, weight) => {
      let _weight = item * weight;
      return _weight;
    };
    /* let a = peso / truckWeight;
          */
    _.forIn(totalCargo, function(value, key) {
      let a = 0;
      if ((key = 'fridge')) {
        a = getItemWeight(value, 50);
        console.log('1 peso', a, peso);
      }

      peso = peso + a;

      if ((key = 'stove')) {
        a = getItemWeight(value, 20);
        console.log('2 peso', a, peso);
      }

      peso = peso + a;

      if ((key = 'oven')) {
        a = getItemWeight(value, 15);
        console.log('3 peso', a, peso);
      }
      peso = peso + a;
    });

    console.log('PESO:', peso);

    let a = peso / truckWeight;
    let t = 1;

    if (a < 1) {
      console.log(t, 'Caminhão');
    } else {
      for (var index = 0; index < a; index++) {
        t = t + index;
        console.log(t, 'Caminhões');
      }
    }
    console.log(a, t);
  }

  loadTruck() {
    const totalCargo = {
      fridge: this.inputFridge.value,
      stove: this.inputStove.value,
      oven: this.inputOven.value
    };

    this.getWeight(totalCargo);
  }
  render() {
    return (
      <div>
        <Panel>
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
                <Button
                  bsStyle="primary"
                  onClick={this.loadTruck}
                  type="button"
                >
                  Carregar
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default Expedition;
