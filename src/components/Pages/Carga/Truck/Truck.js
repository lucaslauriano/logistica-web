import React, { Component } from 'react';
import Shortid from 'shortid';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import Product from '../Product/Product';

import './Truck.css';

class Truck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  loadInTruck = e => {
    let items = this.state.items.slice();

    items.push({
      label: e.dragData.label,
      uid: Shortid.generate()
    });

    this.setState({ items: items });

    e.sourceElem.style.visibility = 'hidden';
    console.log('loadInTruck E: ', { e });
  };

  changeTruck = (fromIndex, toIndex, dragData) => {
    let items = this.state.items.slice();
    const item = {
      label: dragData.label,
      uid: Shortid.generate()
    };
    items.splice(toIndex, 0, item);
    this.setState({ items: items });

    console.log('Trocando de Caminhão: ', { dragData });
  };

  kill = uid => {
    let items = this.state.items.slice();
    const index = items.findIndex(item => {
      return item.uid == uid;
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({ items: items });
  };

  render() {
    const styles = {};
    // DropTarget aninhados para Permitir manipular itens descartados de fora e itens arrastados entre Caminhões.
    return (
      <DragDropContainer dragHandleClassName="grab_me">
        <DropTarget
          onHit={this.loadInTruck}
          targetKey={this.props.targetKey}
          dropData={{
            name: this.props.name
          }}
        >
          <DropTarget
            onHit={this.loadInTruck}
            targetKey="product"
            dropData={{
              name: this.props.name
            }}
          >
            <div className="truck">
              <div
                className="grab_me"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0
                }}
              >
                &times;
              </div>
              {this.state.items.map((item, index) => {
                return (
                  <Product
                    key={item.uid}
                    uid={item.uid}
                    kill={this.kill}
                    index={index}
                    changeTruck={this.changeTruck}
                  >
                    {item.label}
                  </Product>
                );
              })}
            </div>
          </DropTarget>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default Truck;
