import axios from 'axios';

const rest = axios.create({
  baseURL: 'http://localhost:4000/'
});

export const loadFreight = () => rest.get('freights');
export const loadFreightById = id => rest.get('freights/' + id);
export const loadFreightByCarga = id => api.get('series?id=' + id);

export const getItemWeight = (key, value) => {
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

const api = {
  loadFreight,
  loadFreightById,
  loadFreightByCarga,
  getItemWeight
};

export default api;
