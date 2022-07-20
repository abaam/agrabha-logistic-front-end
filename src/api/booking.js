import Api from './api';
import Csrf from './csrf';

export default {
  async store(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/store', form);
  }
};