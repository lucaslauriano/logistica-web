import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Button, ButtonToolbar } from 'react-bootstrap';

import './Home.css';
import api from '../../../api/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freights: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    api
      .loadFreight('freights')
      .then(res => this.setState({ isLoading: false, freights: res.data }));
  }

  renderFreights(freights) {
    return (
      <Link key={freights.id} to={`/transportes/${freights.id}`}>
        <Button type="button" className="btn-series btn btn-default">
          Carregamento nº: {freights.id}
        </Button>
      </Link>
    );
  }

  render() {
    return (
      <div>
        <h1 className="title">Home</h1>
        <hr />
        <div className="container">
          <Panel>
            <ButtonToolbar>
              {this.state.freights.map(this.renderFreights)}
            </ButtonToolbar>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Home;
