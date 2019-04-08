import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Panel, ButtonToolbar } from 'react-bootstrap';
//import Shortid from 'shortid';

import './Factory.css';
import Truck from './Truck/Truck';
import ButtonAdd from '../../../common/ButtonAdd/ButtonAdd';
class Factory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargo: [],
      isLoaded: false
    };
    this.getCargo = this.getCargo.bind(this);
    this.saveCargo = this.saveCargo.bind(this);
    this.reLoadTruck = this.reLoadTruck.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  getCargo(cargo) {
    return <Truck key={cargo.idTruck} data={cargo} target={cargo.idTruck} />;
  }
  saveCargo(cargo) {
    alert('Salvando');
  }
  reLoadTruck(cargo) {
    alert('Reorganizando');
  }

  render() {
    let cargo = this.props.cargo;
    console.log('getCargo', cargo);
    return (
      <Panel>
        {cargo.map(this.getCargo)}
        <hr />
        <ButtonToolbar>
          <ButtonAdd
            btnStyle="success"
            btnLabel="Salvar"
            className="button-mg-bottom"
            method={this.saveCargo}
          />
          <ButtonAdd
            btnStyle="default"
            btnLabel="Reorganizar"
            className="button-mg-bottom"
            method={this.reLoadTruck}
          />
        </ButtonToolbar>
      </Panel>
    );
  }
}

export default Factory;
