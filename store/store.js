import {createStore} from 'vuex';
import auth from './modules/auth/index';
const store=createStore({
  module:{
    auth,
  }
})
export default store;