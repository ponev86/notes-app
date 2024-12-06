import axios from 'axios';
import { API_URL } from 'shared/constants/api';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

agent.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : 408;

    if (status >= 500) {
      window.console.error(error.toString());
    }

    return Promise.reject(error);
  }
);

agent.interceptors.request.use(
  (config) => {
    const updConfig = { ...config };

    if (
      updConfig.url?.length &&
      !updConfig.url.includes('?') &&
      updConfig.url[updConfig.url.length - 1] !== '/'
    ) {
      updConfig.url += '/';
    }

    return updConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default agent;
