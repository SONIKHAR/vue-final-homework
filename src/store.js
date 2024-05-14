import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
            isLoading: false
    }
  },
  mutations: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading
   
    },
    decrement(state) {
      state.count--
    }
  },
  getters: {
   
    isLoading: (state) => state.isLoading
  }
})

export { store }
