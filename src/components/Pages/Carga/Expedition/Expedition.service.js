import _ from 'lodash';

export const getItemByTruck = (item, truck) => {
  let arr = [];

  if (item % truck === 0) {
    for (var index = 0; index < truck; index++) {
      let a = item / truck;

      arr.push(a);
    }
  } else {
    for (index = 0; index < truck; index++) {
      if (index < truck - 1) {
        let a = _.floor(item / truck);
        arr.push(a);
      } else {
        let a = _.ceil(item / truck);
        arr.push(a);
      }
    }
  }

  return arr;
};

export const getTotalWeight = (data, weight) => {
  let getItemWeight = (key, value) => {
    let weight;

    if (key === 'fridge') {
      weight = value * 50;
    } else if (key === 'stove') {
      weight = value * 20;
    } else if (key === 'oven') {
      weight = value * 15;
    }

    return weight;
  };

  _.forIn(data, function(value, key) {
    weight = weight + getItemWeight(key, value);
  });

  return weight;
};

export const hasTruck = (totalWeight, truckWeight) => {
  let allTruck = 1;

  let a = totalWeight / truckWeight;

  for (var index = 0; index <= a; index++) {
    if (a > 1) {
      allTruck = index + 1;
    } else {
      allTruck = index;
    }
  }

  return allTruck;
};

const ExpeditionService = {
  getItemByTruck,
  getTotalWeight,
  hasTruck
};

export default ExpeditionService;
