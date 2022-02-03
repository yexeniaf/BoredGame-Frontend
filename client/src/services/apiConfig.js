import axios from 'axios';

const apiUrl = 'https://boredgame-backend.herokuapp.com/';

const api = axios.create({
  baseURL: apiUrl
});

export default api;