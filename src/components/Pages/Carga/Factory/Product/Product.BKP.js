import React, { Component } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: false
    };
  }

  highlight = () => {
    this.setState({ highlighted: true });
  };

  unHighlight = () => {
    this.setState({ highlighted: false });
  };

  handleDrop = e => {
    e.stopPropagation();
    this.unHighlight();
    this.props.changeTruck(e.dragData.index, this.props.index, e.dragData);
    e.sourceElem.style.visibility = 'hidden';
  };

  deleteMe = () => {
    this.props.kill(this.props.uid);
  };

  render() {
    let items = {
      label: this.props.children.label,
      nome: this.props.children.nome,
      index: this.props.children.index
    };

    return (
      <DragDropContainer
        targetKey={items.index}
        returnToBase={true}
        dragData={items}
        onDrop={this.deleteMe}
      >
        <DropTarget
          onHit={this.handleDrop}
          onDragEnter={this.highlight}
          onDragLeave={this.unHighlight}
          targetKey={items.index}
        >
          <div className={items.nome}>{items.label}</div>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default Product;
