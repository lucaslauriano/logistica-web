import React, { Component } from 'react';
import {
  Panel,
  Grid,
  Row,
  Thumbnail,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import './Transportes.css';
import api from '../../../api/api';

class Transportes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      freights: [],
      cargo: [],
      isLoading: false
    };

    this.loadData = this.loadData.bind(this);
    this.renderCargo = this.renderCargo.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({ isLoading: true });

    api
      .loadFreight('freights')
      .then(res => this.setState({ isLoading: false, freights: res.data }));

    api
      .loadFreightById(this.props.match.params.id)
      .then(res => this.setState({ isLoading: false, cargo: res.data.cargo }));
  }

  renderCargo(cargo) {
    const title = <span className="truck-title">Caminhão {cargo.id}</span>;
    return (
      <Col key={cargo.id} xs={2} md={2}>
        <Thumbnail>
          <h1>{title}</h1>
          <ListGroup>
            <ListGroupItem>Geladeiras: {cargo.stove}</ListGroupItem>
            <ListGroupItem>Fogão: {cargo.fridge}</ListGroupItem>
            <ListGroupItem>Fornos: {cargo.oven}</ListGroupItem>
            <ListGroupItem>
              Peso Total {cargo.weight}
              kg
            </ListGroupItem>
          </ListGroup>
        </Thumbnail>
      </Col>
    );
  }

  render(cargo) {
    const title = <h3>Carregamento {this.props.match.params.id}</h3>;

    return (
      <div>
        <h1 className="title">Transportes</h1>
        <hr />
        <Grid bsStyle=" container">
          <Panel header={title} bsStyle="primary">
            <Row>{this.state.cargo.map(this.renderCargo)}</Row>
          </Panel>
        </Grid>
      </div>
    );
  }
}

export default Transportes;
