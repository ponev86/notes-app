import axios from 'axios';
import { API_URL } from 'shared/constants/api';

const agent = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
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

export default agent;
