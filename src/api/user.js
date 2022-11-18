import Api from './api';
import Csrf from './csrf';

export default {
  async register(form) {
    await Csrf.getCookie();

    return Api.post('api/register', form);
  },

  async login(form) {
    await Csrf.getCookie();

    return Api.post('api/login', form);
  },

  async logout() {
    await Csrf.getCookie();

    return Api.post('/logout');
  },

  auth() {
    return Api.get('/user');
  },

  async requestVerification(form) {
    await Csrf.getCookie();

    return Api.post('api/request-verification', form);
  },

  async forgotPassword(form) {
    await Csrf.getCookie();

    return Api.post('api/forgot-password', form);
  },
};