import axios from 'axios';
import qs from 'query-string';

export const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: (params) => qs.stringify(params)
});
