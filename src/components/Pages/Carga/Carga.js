import React, { Component } from 'react';
import { Panel, Grid } from 'react-bootstrap';

import Factory from './Factory/Factory';
import Expedition from './Expedition/Expedition';

import './Carga.css';

class Carga extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    console.log('CARGA PROPS', { props });
    console.log('CARGA THIS', this);
  }

  render() {
    const titleNew = <h3>Novo Carregamento</h3>;

    const titleExpedition = <h3>Expedição</h3>;

    return (
      <div>
        <h1 className="title">Carga </h1>
        <hr />
        <Grid bsStyle=" container">
          <Panel header={titleNew} bsStyle="primary">
            <Expedition />
          </Panel>
        </Grid>
        <hr />
        <Grid bsStyle=" container">
          <Panel header={titleExpedition} bsStyle="primary">
            <Factory />
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default Carga;
