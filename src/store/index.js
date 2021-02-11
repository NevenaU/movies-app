import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations'
import authService from '../services/AuthService'
Vue.use(Vuex)



const token = JSON.parse(localStorage.getItem('token'));
export const store = new Vuex.Store({
  //inicijalno stanje
  state: {
    counter: 0,
    token: token,
    activeUser: {}
  },
  getters: {
    //funkcija koja vraca deo state-a
    //najcesce se zove kao i deo state-a, to je nacin na koji dobavljamo state
    //od stejta daje parce state
    //mapiramo ih na computed
    counter: (state) => state.counter,
    doubledCounter: (state) => state.counter * 2,
    activeUser: (state) => state.activeUser,
    isAuthenticated: (state) => !state.token
  },

  //sinhrona funkc koja jedina moze da menja stanje na stateu
  //uglavnom ih pozivamo od st akcije
  mutations,

 //zaduzene za side efekte
  actions: {
    async login(store, credentials) {
      console.log('vuex action login', { credentials})
      const { user, token } = await authService.login(credentials.email, credentials.password)
      localStorage.setItem('token', JSON.stringify(token));

      store.commit('setActiveUser', user)
      store.commit('setToken', token)
    }
  },
//
})


