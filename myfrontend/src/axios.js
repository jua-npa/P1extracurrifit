import axios from 'axios';
import { baseUrl } from './config';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
