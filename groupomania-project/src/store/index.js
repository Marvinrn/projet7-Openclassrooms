import { createStore } from 'vuex'


const store = createStore({
  state: {
    user: {
      userName: JSON.parse(localStorage.getItem("user")).userName,
      email: JSON.parse(localStorage.getItem("user")).email,
    },
  },
})

export default store
