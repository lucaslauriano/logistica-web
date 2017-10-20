import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Form,
  Panel,
  Thumbnail,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import './Carga.css';

class Carga extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Carga</h1>
        <hr />
        <div className="container">
          <Panel>
            <Form horizontal>
              <FormGroup controlId="">
                <Col componentClass={ControlLabel} sm={2}>
                  Geladeiraa
                </Col>
                <Col sm={10}>
                  <FormControl type="number" placeholder="Quantidade" />
                </Col>
              </FormGroup>

              <FormGroup controlId="">
                <Col componentClass={ControlLabel} sm={2}>
                  Fogões
                </Col>
                <Col sm={10}>
                  <FormControl type="number" placeholder="Quantidade" />
                </Col>
              </FormGroup>

              <FormGroup controlId="">
                <Col componentClass={ControlLabel} sm={2}>
                  Fornos
                </Col>
                <Col sm={10}>
                  <FormControl type="number" placeholder="Quantidade" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button bsStyle="primary" type="button">
                    Carregar
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Panel>
          <hr />
          <Panel>
            <Grid>
              <Row>
                <Col xs={6} md={3}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="">
                    <hr />
                    <Button bsStyle="default">Button</Button>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={3}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="">
                    <hr />
                    <Button bsStyle="primary">Button</Button>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={3}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="">
                    <hr />
                    <Button bsStyle="primary">Button</Button>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={3}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="">
                    <hr />
                    <Button type="button" bsStyle="primary">
                      Button
                    </Button>
                  </Thumbnail>
                </Col>
                <hr />
              </Row>
            </Grid>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Carga;
