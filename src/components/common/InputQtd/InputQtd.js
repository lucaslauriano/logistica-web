import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

class InputQtd extends Component {
  render() {
    return (
      <FormGroup controlId="">
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.label}
        </Col>
        <Col sm={10}>
          <FormControl
            inputRef={inputRef => (this.inputRef = inputRef)}
            type="number"
            placeholder="Quantidade"
          />
        </Col>
      </FormGroup>
    );
  }
}

export default InputQtd;
