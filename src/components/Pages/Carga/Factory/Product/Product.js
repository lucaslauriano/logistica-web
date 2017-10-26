import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: false
    };

    this.deleteMe = this.deleteMe.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.unHighlight = this.unHighlight.bind(this);
    this.highlight = this.highlight.bind(this);
  }

  highlight() {
    this.setState({ highlighted: false });
  }

  unHighlight() {
    this.setState({ highlighted: true });
  }

  handleDrop(e) {
    e.stopPropagation();
    this.unHighlight();
    this.props.changeTruck(e.dragData.index, this.props.index, e.dragData);
    e.sourceElem.style.visibility = 'hidden';
  }

  deleteMe() {
    this.props.kill(this.props.id);
  }

  render() {
    let items = {
      fridge: this.props.fridge,
      oven: this.props.oven,
      stove: this.props
        .stove /* ,
      idTruck: this.props.children.idTruck,
      index: this.props.children.index */
    };

    const tooltip = (
      <Tooltip key={items.id} id="tooltip">
        {items.weight}kg
      </Tooltip>
    );

    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        returnToBase
        dragData={items}
        onDrop={this.deleteMe}
        customDragElement={this.props.customDragElement}
      >
        <DropTarget
          onHit={this.handleDrop}
          onDragEnter={this.highlight}
          onDragLeave={this.unHighlight}
          targetKey={items.index}
        >
          <OverlayTrigger placement="top" overlay={tooltip}>
            <div className={items.nome}>{items.label}</div>
          </OverlayTrigger>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default Product;
