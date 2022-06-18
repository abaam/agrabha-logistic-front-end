import axios from 'axios';

let Api = axios.create({
  baseURL: process.env.VUE_APP_LARAVEL
});

Api.defaults.withCredentials = true;

export default Api;