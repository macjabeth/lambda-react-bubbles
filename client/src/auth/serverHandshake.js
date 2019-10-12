import axios from 'axios';

export const serverHandshake = authenticate => {
  const config = {
    baseURL: 'http://localhost:5000/api'
  };

  if (authenticate)
    config.headers = {
      Authorization: localStorage.getItem('token')
    };

  return axios.create(config);
};