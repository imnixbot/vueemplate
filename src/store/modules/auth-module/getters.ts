import { GetterTree } from 'vuex';
import { StateInterface } from '../../../types/states'
import { AuthStateInterface } from '../../../types/states/authStateType'

const getters: GetterTree<AuthStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
