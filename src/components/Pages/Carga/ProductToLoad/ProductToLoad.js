import React, { Component } from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

import './ProductToLoad.css';

class ProductToLoad extends Component {
  render() {
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        returnToBase={true}
        dragData={{
          label: this.props.label
        }}
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
            width: '20px',
            height: '20px',
            backgroundColor: '#666'
          }}
        />
      </DragDropContainer>
    );
  }
}

export default ProductToLoad;
