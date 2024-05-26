import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
