import axios from 'axios';
import getToken from './getToken';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  const token = getToken();

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token,
    },
  };
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = 401;
    if (
      error?.response?.status !== status || ['/login'].includes(window.location.pathname)
    ) {
      return Promise.reject(error);
    }
    window.location.href = '/login';
    return null;
  },
);

export default api;
