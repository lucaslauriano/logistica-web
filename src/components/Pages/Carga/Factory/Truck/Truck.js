import React, { Component } from 'react';
import Shortid from 'shortid';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import { Thumbnail } from 'react-bootstrap';
import './Truck.css';
import Product from '../Product/Product';

class Truck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      trucks: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        }
      ],
      produtcs: [
        {
          id: 1,
          nome: 'fridge',
          label: 'Geladeiras',
          weight: 50
        },
        {
          id: 2,
          nome: 'stove',
          label: 'Fogão',
          weight: 50
        },
        {
          id: 3,
          nome: 'oven',
          label: 'Forno',
          weight: 50
        },
        {
          id: 5,
          nome: 'fridge',
          label: 'Geladeiras',
          weight: 50
        },
        {
          id: 6,
          nome: 'oven',
          label: 'Forno',
          weight: 50
        },
        {
          id: 7,
          nome: 'oven',
          label: 'Forno',
          weight: 50
        },
        {
          id: 8,
          nome: 'fridge',
          label: 'Geladeiras',
          weight: 50
        }
      ]
    };

    console.log('TRUCK PROPS', props);
    console.log('TRUCK THIS', this);
  }

  loadInTruck = e => {
    let items = this.state.items.slice();

    items.push({
      label: e.dragData.label,
      nome: e.dragData.nome,
      weight: e.dragData.weight,
      uid: Shortid.generate()
    });

    this.setState({ items: items });

    e.sourceElem.style.visibility = 'hidden';

    console.log(e, 'loadInTruck E: ', items);
  };

  changeTruck = (fromIndex, toIndex, dragData) => {
    let items = this.state.items.slice();
    const item = {
      label: dragData.label,
      nome: dragData.nome,
      weight: dragData.weight,
      uid: Shortid.generate()
    };
    items.splice(toIndex, 0, item);
    this.setState({ items: items });

    console.log('Trocando de Caminhão: ', { dragData }, items, item);
  };

  kill = uid => {
    let items = this.state.items.slice();
    const index = items.findIndex(item => {
      return item.uid === uid;
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({ items: items });

    console.log('KILL: ', uid, items, index);
  };

  render() {
    let items = {
      label: this.props.label
    };
    // DropTarget aninhados para Permitir manipular itens descartados de fora e
    // itens arrastados entre Caminhões.
    return (
      <DragDropContainer dragHandleClassName="grab_me">
        <DropTarget
          onHit={this.loadInTruck}
          targetKey={this.props.targetKey}
          dropData={items}
        >
          <DropTarget
            onHit={this.loadInTruck}
            targetKey={items.uid}
            dropData={items}
          >
            <Thumbnail style={{ float: 'left' }} className="truck">
              {this.state.items.map((item, index) => {
                return (
                  <Product
                    key={item.uid}
                    uid={item.uid}
                    kill={this.kill}
                    index={index}
                    changeTruck={this.changeTruck}
                  >
                    {item}
                  </Product>
                );
              })}
            </Thumbnail>
          </DropTarget>
        </DropTarget>
      </DragDropContainer>
    );
  }
}

export default Truck;
