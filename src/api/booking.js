import Api from './api';
import Csrf from './csrf';

export default {
  async store(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/store', form);
  },

  async payBooking(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/payBooking', form);
  },

  async cancelBooking(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/cancelBooking', form);
  },

  async approvePayment(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/approvePayment', form);
  },

  async acceptBooking(form) {
    await Csrf.getCookie();

    return Api.post('api/bookings/acceptBooking', form);
  }
};