import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Transportes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1 class="title">Transportes</h1>
          <hr />
          <div class="container">
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Transporte</th>
                  <th>Geladeiras</th>
                  <th>Fogões</th>
                  <th>Fornos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Transportes;
