import React, { Component } from 'react';
import { Panel, Grid, Row } from 'react-bootstrap';

import Factory from './Factory/Factory';
import Expedition from './Expedition/Expedition';

import './Carga.css';

const dados = {
  allTruck: 4
};

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
    const { expedition, factory } = this.props;

    console.log('carga->expedition', { expedition });
    console.log('carga->factory', { factory });

    return (
      <div>
        <h1 className="title">Carga </h1>
        <hr />
        <Panel bsClass={'container'}>
          <Expedition {...expedition} />
        </Panel>
        <hr />
        <Panel bsClass={'container'}>
          <Grid>
            <Row>
              <Factory {...factory} />
            </Row>
          </Grid>
        </Panel>
      </div>
    );
  }
}

export default Carga;
