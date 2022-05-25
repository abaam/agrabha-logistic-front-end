import axios from 'axios';

let Api = axios.create({
  baseURL: process.env.VUE_APP_LARAVEL
});

Api.defaults.withCredentials = true;
Api.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': localStorage.getItem('csrf_token')
};

export default Api;