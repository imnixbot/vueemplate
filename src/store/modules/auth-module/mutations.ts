import { MutationTree } from 'vuex';
import { AuthStateInterface } from '../../../types/states/authStateType'

const mutation: MutationTree<AuthStateInterface> = {
  setIsAuthenticated(state: AuthStateInterface, payload: boolean) {
    state.isAuthenticated = payload;
  }
};

export default mutation;
