import React, { Component } from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';

class ButtonAdd extends Component {
  render() {
    return (
      <FormGroup className="button-mg-bottom">
        <Col>
          <Button
            bsStyle="primary"
            onClick={() => this.props.loadTruck()}
            type="button"
          >
            Carregar
          </Button>
        </Col>
      </FormGroup>
    );
  }
}

export default ButtonAdd;
