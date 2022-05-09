import { Module } from 'vuex';
import { StateInterface } from '../../../types/states'
import state from './state';
import { AuthStateInterface } from '../../../types/states/authStateType'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const authModule: Module<AuthStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default authModule;
