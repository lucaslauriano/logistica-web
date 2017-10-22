import React, { Component } from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

import './ProductToLoad.css';

class ProductToLoad extends Component {
  constructor(props) {
    super(props);

    console.log('PODUCT LOAD PROPS', props);
    console.log('PODUCT LOAD this', this);
  }

  render() {
    let items = {
      label: this.props.label,
      nome: this.props.nome,
      weight: this.props.weight
    };
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        returnToBase={true}
        dragData={items}
        customDragElement={this.props.customDragElement}
        customDragElement={this.props.customDragElement}
        onDragStart={() => console.log('start')}
        onDrag={() => console.log('dragging')}
        onDragEnd={() => console.log('end')}
        onDrop={e => console.log(e)}
      >
        <div
          height="45"
          style={{
            marginLeft: 40,
            width: '80px',
            height: '80px',
            backgroundColor: '#666'
          }}
        >
          {items.label}
        </div>
      </DragDropContainer>
    );
  }
}

export default ProductToLoad;
