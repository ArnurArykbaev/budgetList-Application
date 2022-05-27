const usersList = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some income comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
  },
  getters: {
    // { list } = state.list
    userBudget: ({ list }) => Object.values(list),
  },
  mutations: {
    DELETE_USER(state, id) {
      delete state.list[id];
    },
    ADD_USER(state, user) {
      state.list[user.id] = user;
    },
  },
  actions: {
    deleteSomeUser({ commit }, userId) {
      commit("DELETE_USER", userId);
    },
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      commit("ADD_USER", newUser);
    },
  },
  };

  export default usersList;