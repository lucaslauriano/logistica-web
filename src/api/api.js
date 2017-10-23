import axios from 'axios';

const rest = axios.create({ baseURL: 'http://localhost:4000/' });

export const loadFreight = () => rest.get('freights');
export const loadFreightById = id => rest.get('freights/' + id);
export const loadFreightByCarga = id => api.get('series?id=' + id);

const api = {
  loadFreight,
  loadFreightById,
  loadFreightByCarga
};

export default api;
