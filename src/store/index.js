import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import mainstore from './mainstore'

export default store(function () {
  const Store = createStore({
    modules: {
      mainstore
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
