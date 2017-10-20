import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import api from '../../api/api';

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

    api.loadFreight('freights').then(res =>
      this.setState({
        isLoading: false,
        freights: res.data
      })
    );

    api.loadFreightById(this.props.match.params.id).then(res =>
      this.setState({
        isLoading: false,
        cargo: res.data.cargo
      })
    );
  }

  renderCargo(cargo) {
    return (
      <div key={cargo.id}>
        <div className="item  col-xs-4 col-lg-4">
          <div className="thumbnail">
            <div className="caption">
              <h4 className="group inner list-group-item-heading">
                Caminhão {cargo.id}
              </h4>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <span>Geladeiras: {cargo.stove}</span>
                  <br />
                  <span>Fogão: {cargo.fridge}</span>
                  <br />
                  <span>Fornos: {cargo.oven}</span> <br />
                  <span>Peso Total: {cargo.weight} </span> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1 className="title">Transportes</h1>
        <hr />
        <h2>Carga {this.props.match.params.id}</h2>
        <div className="container">
          <div id="series" className="row list-group">
            {this.state.cargo.map(this.renderCargo)}
          </div>
        </div>
      </div>
    );
  }
}

export default Transportes;
