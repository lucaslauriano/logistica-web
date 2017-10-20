import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

import Factory from './Factory/Factory';
import Expedition from './Expedition/Expedition';

import './Carga.css';

class Carga extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Carga</h1>
        <hr />
        <div className="container">
          <Expedition />
          <hr />
          <Panel>
            <Grid>
              <Row>
                <Col xs={6} md={3}>
                  <Factory />
                </Col>
              </Row>
            </Grid>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Carga;
