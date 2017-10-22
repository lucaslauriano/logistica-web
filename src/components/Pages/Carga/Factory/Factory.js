import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import './Factory.css';
import Truck from './Truck/Truck';
import ProductToLoad from './ProductToLoad/ProductToLoad';

class Factory extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

    console.log('FACTORY PROPS:', { props });
    console.log('FACTORY THIS:', this);
  }

  teste = () => {
    return this.setState({ teste: this.props.alTruck });
  };

  render(props, trucks) {
    const { truck } = this.props;
    console.log('truck PROPS:', { truck });
    return (
      <Panel>
        {this.state.produtcs.map((produtcs, trucks) => (
          <ProductToLoad
            targetKey={trucks.id}
            key={produtcs.id}
            nome={produtcs.nome}
            label={produtcs.label}
            weight={produtcs.weight}
          />
        ))}

        <hr />
        {this.state.trucks.map(trucks => (
          <Truck key={trucks.id} targetKey={trucks.id} />
        ))}
      </Panel>
    );
  }
}

export default Factory;

Factory.propTypes = {
  allTruck: PropTypes.number
};
