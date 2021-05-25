import employees from "../../api/employees";
/* import events from "../../api/events"; */

const state = () => ({
    all:[],
  //  /*  oneAccident: events.getEvents()[0], */
  });

const actions = {
    getAllEmployees({ commit }) {
      commit("setEmployees", employees.getEmployees());
    },
  };
const mutations = {
    setEmployees(state, employees) {
      state.all = [...employees];
    },
  }

  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }