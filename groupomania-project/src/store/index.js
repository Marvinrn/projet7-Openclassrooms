import { createStore } from 'vuex'


const store = createStore({
  state: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  getters: {
    isLoggedIn: function (state) {
      if (state.token && state.user && state.token !== null) {
        return true
      }
      return false
    },
    getEmail: function (state) {
      if (state.user.email) {
        return state.user.email
      }
      return
    },
    getToken: function (state) {
      if (state.token) {
        return state.token
      }
      return
    },
    isAdmin: function (state) {
      return state.user.isAdmin
    }
  },
  mutations: {
    login: function (state, data) {
      state.token = data.token;
      state.user = data.user;
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
    },
    logout: function (state) {
      state.token = null
      state.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
})

export default store
