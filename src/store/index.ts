import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';
import { StateInterface } from '../types/states'
import auth from './modules/auth-module'


// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      auth,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })
  return Store;
})


export function useStore() {
  return vuexUseStore(storeKey)
}
