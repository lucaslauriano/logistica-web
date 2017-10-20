import React, { Component } from 'react';

import Truck from '../Truck/Truck';
import ProductToLoad from '../ProductToLoad/ProductToLoad';

import './Factory.css';

class Factory extends Component {
  render() {
    return (
      <div>
        <div className="things_to_drag">
          <ProductToLoad targetKey="truckId" label="Geladeiras" />
          <ProductToLoad targetKey="truckId" label="Geladeiras" />
          <ProductToLoad targetKey="truckId" label="Geladeiras" />
          <ProductToLoad targetKey="truckId" label="Geladeiras" />
          <ProductToLoad targetKey="truckId" label="Fogões" />
          <ProductToLoad targetKey="truckId" label="Fogões" />
          <ProductToLoad targetKey="truckId" label="Fogões" />
          <ProductToLoad targetKey="truckId" label="Fornos" />
          <ProductToLoad targetKey="truckId" label="Fornos" />
          <ProductToLoad targetKey="truckId" label="Fornos" />
        </div>
        <div className="boxes">
          <Truck targetKey="truckId" />
          <br />
          <Truck targetKey="truckId" />
        </div>
      </div>
    );
  }
}

export default Factory;
