export const mutations = {
  incrementCounter: (state) => {
    state.counter++;
  },
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },
  setCounter(state, counter){
    state.counter=counter;
  },
  setToken(state,token) {
    state.token=token;
  }
}
