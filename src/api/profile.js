import Api from './api';
import Csrf from './csrf';

export default {
    async storeName(form) {
        await Csrf.getCookie();
    
        return Api.post('api/users/storeName', form);
    },

    async storeEmail(form) {
      await Csrf.getCookie();
  
      return Api.post('api/users/storeEmail', form);
  },
};