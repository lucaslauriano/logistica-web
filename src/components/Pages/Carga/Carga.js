import React, { Component } from 'react';
import { Panel, Grid, Form } from 'react-bootstrap';
import Shortid from 'shortid';

import './Carga.css';
import expeditionService from './Expedition/Expedition.service';

import Factory from './Factory/Factory';
import ButtonAdd from '../../common/ButtonAdd/ButtonAdd';
import InputQtd from '../../common/InputQtd/InputQtd';

const truckWeight = 300;

class Carga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargo: []
    };

    this.getCargo = this.getCargo.bind(this);
    this.loadTruck = this.loadTruck.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.getWeightByTruck = this.getWeightByTruck.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  getAllTruck(totalCargo) {
    let totalWeight = 0;

    totalWeight = expeditionService.getTotalWeight(totalCargo, totalWeight);

    return expeditionService.hasTruck(totalWeight, truckWeight);
  }

  getWeightByTruck(fridge, stove, oven) {
    let weightFridge = fridge * 50;
    let weightStove = stove * 20;
    let weightOven = oven * 15;

    return weightFridge + weightStove + weightOven;
  }

  clearInputs() {
    this.inputFridge.inputRef.value = '';
    this.inputStove.inputRef.value = '';
    this.inputOven.inputRef.value = '';
  }

  getCargo(cargo, newCargo) {
    let arr = [];

    for (var index = 0; index < cargo.truck; index++) {
      arr.push({
        idTruck: Shortid.generate(),
        fridge: newCargo[0].fridge[index],
        stove: newCargo[0].stove[index],
        oven: newCargo[0].oven[index],
        weight: this.getWeightByTruck(
          newCargo[0].fridge[index],
          newCargo[0].stove[index],
          newCargo[0].oven[index]
        )
      });
    }

    return arr;
  }

  loadTruck() {
    let totalWeight = 0;
    let newCargo = [];

    const totalCargo = {
      fridge: this.inputFridge.inputRef.value,
      stove: this.inputStove.inputRef.value,
      oven: this.inputOven.inputRef.value
    };

    const cargo = {
      fridge: parseInt(totalCargo.fridge, 10) || 0,
      stove: parseInt(totalCargo.stove, 10) || 0,
      oven: parseInt(totalCargo.oven, 10) || 0,
      truck: this.getAllTruck(totalCargo, 10) || 0,
      totalWeight: expeditionService.getTotalWeight(totalCargo, totalWeight)
    };

    newCargo.push({
      fridge: expeditionService.getItemByTruck(cargo.fridge, cargo.truck),
      stove: expeditionService.getItemByTruck(cargo.stove, cargo.truck),
      oven: expeditionService.getItemByTruck(cargo.oven, cargo.truck)
    });

    this.clearInputs();

    this.setState({
      cargo: this.getCargo(cargo, newCargo)
    });

    let cargos = this.getCargo(cargo, newCargo);
    console.log(cargos);
  }

  render(cargo) {
    const titleNew = 'Novo Carregamento';
    const titleExpedition = <h3>Expedição</h3>;

    return (
      <div>
        <h1 className="title">Carga</h1>
        <hr />
        <Grid bsStyle="container">
          <Panel header={titleNew} bsStyle="primary">
            <Form horizontal>
              <InputQtd
                label="Geladeira"
                ref={ref => (this.inputFridge = ref)}
              />
              <InputQtd label="Fogão" ref={ref => (this.inputStove = ref)} />
              <InputQtd label="Forno" ref={ref => (this.inputOven = ref)} />
            </Form>
            <ButtonAdd
              className="button-mg-bottom"
              loadTruck={this.loadTruck}
            />
          </Panel>
        </Grid>
        <hr />
        <Grid bsStyle=" container">
          <Panel header={titleExpedition} bsStyle="primary">
            <Factory cargo={cargo} loadTruck={this.loadTruck} />
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default Carga;
