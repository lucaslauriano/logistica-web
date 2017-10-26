import React, { Component } from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';

class ButtonAdd extends Component {
  render() {
    return (
      <FormGroup className="button-mg-bottom">
        <Col>
          <Button
            bsStyle={this.props.btnStyle}
            onClick={() => this.props.method()}
            type="button"
          >
            {this.props.btnLabel}
          </Button>
        </Col>
      </FormGroup>
    );
  }
}

export default ButtonAdd;
