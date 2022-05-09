import { ActionTree } from 'vuex';
import { StateInterface } from '../../../types/states'
import { AuthStateInterface } from '../../../types/states/authStateType'

const actions: ActionTree<AuthStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
