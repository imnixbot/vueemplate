import { boot } from 'quasar/wrappers'

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.name !== 'auth.login' && !store.state.auth.isAuthenticated) next({ name: 'auth.login' })
    else next()
  })
})