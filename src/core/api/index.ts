import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://back.askify.kz/api/v1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
