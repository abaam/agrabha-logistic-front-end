import Api from './api';
import Csrf from './csrf';

export default {
  async view(form) {
    await Csrf.getCookie();

    return Api.post('api/notifications/view', form);
  }
};