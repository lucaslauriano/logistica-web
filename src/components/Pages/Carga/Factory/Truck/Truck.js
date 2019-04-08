import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

import './Truck.css';
import Product from '../Product/Product';
import TruckService from './Truck.service.js';

class Truck extends Component {
  constructor(props) {
    super(props);

    console.log('TRUCK', this, props);

    this.state = {
      cargo: this.props.cargo,
      items: [
        { label: 'Geladeira', nome: 'fridge', weight: 50, idTruck: 1, id: 1 },
        { label: 'Geladeira', nome: 'fridge', weight: 50, idTruck: 1, id: 2 },
        { label: 'Fogão', nome: 'stove', weight: 20, idTruck: 1, id: 3 },
        { label: 'Fogão', nome: 'stove', weight: 20, idTruck: 1, id: 4 },
        { label: 'Forno', nome: 'oven', weight: 15, idTruck: 2, id: 5 },
        { label: 'Forno', nome: 'oven', weight: 15, idTruck: 2, id: 6 },
        { label: 'Forno', nome: 'oven', weight: 15, idTruck: 2, id: 7 },
        { label: 'Forno', nome: 'oven', weight: 15, idTruck: 2, id: 8 }
      ]
    };

    this.kill = this.kill.bind(this);
    this.loadInTruck = this.loadInTruck.bind(this);
    this.changeTruck = this.changeTruck.bind(this);
  }

  loadInTruck(e) {
    let items = this.state.items.slice();
    let newItems = TruckService.loadInTruck(e, items);
    this.setState({ items: newItems });

    console.log('1 - loadInTruck: ', newItems);
    console.log('2 - loadInTruck: ', items);
  }

  changeTruck(fromIndex, toIndex, dragData) {
    let items = this.state.items.slice();
    const item = TruckService.changeTruck(dragData);
    items.splice(toIndex, 0, item);
    this.setState({ items: items });

    console.log('Trocando de Caminhão: ', fromIndex, toIndex, { dragData });
    console.log('Trocando de Caminhão: ', items);
    console.log('Trocando de Caminhão: ', item);
  }

  kill(id) {
    let items = this.state.items.slice();

    const index = items.findIndex(item => {
      return item.id === id;
    });

    if (index !== -1) {
      items.splice(index, 1);
    }

    this.setState({ items: items });
    console.log('KILL', index);
  }

  render() {
    let items = {
      fridge: this.props.data.fridge,
      oven: this.props.data.oven,
      stove: this.props.data.stove,
      idTruck: this.props.data.idTruck,
      id: this.props.id
    };

    console.log(items);

    return (
      <DragDropContainer dragHandleClassName="grab_me">
        <DropTarget
          onHit={this.loadInTruck}
          targetKey={this.props.target}
          dropData={items}
        >
          <DropTarget
            onHit={this.loadInTruck}
            targetKey={items.idTruck}
            dropData={items}
          >
            <Thumbnail
              style={{
                float: 'left'
              }}
              className="truck"
            >
              {this.state.items.map((item, index) => {
                return (
                  <Product
                    products={items}
                    key={item.id}
                    id={item.id}
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
