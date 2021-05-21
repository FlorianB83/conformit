import events from "../../api/events";


const state = () => ({
  all: [],
  oneAccident: events.getEvents()[0]
});

const actions = {
getAllEvents({ commit }) {
commit("setEvents", events.getEvents());
},
getOneAccident({ commit }, id) {
commit("setAccident", events.getAccident(id));
},
};

const mutations = {
setEvents(state, events) {
state.all = [...events];
},
setAccident(state, event) {
state.oneAccident = event;
},
}
  
  
  export default {
    namespaced: true,
    actions,
    state,
    mutations,
  };
  