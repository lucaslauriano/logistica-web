import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/'
});

export const loadGenres = () => api.get('genres');
export const saveSeries = newSeries => api.post('series', newSeries);
export const updateSeries = series => api.put('series/' + series.id, series);
export const deleteSeries = id => api.delete('series/' + id);
export const loadSeriesById = id => api.get('series/' + id);
export const loadSeriesByGenre = genre => api.get('series?genre=' + genre);

const apis = {
  loadGenres,
  saveSeries,
  updateSeries,
  deleteSeries,
  loadSeriesById,
  loadSeriesByGenre
};

export default apis;
