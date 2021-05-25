import events from "../../api/events";
import comments from "../../api/comments";

const state = () => ({
  all: [],
  oneAccident: events.getEvents()[0],
  comments: comments.getComment(47),
});

const actions = {
  getAllEvents({ commit }) {
    commit("setEvents", events.getEvents());
  },
  getOneAccident({ commit }, id) {
    commit("setAccident", events.getAccident(id));
    commit("setComment", comments.getComment(id));
  },

  removeTags({ commit }, témoin) {
    const newTag = this.state.events.oneAccident.Témoins.filter(
      Témoin => Témoin != témoin
    );
    commit("setTemoins", newTag);
  },
  removeComment({ commit }, date) {
    const removeComment = this.state.events.comments.filter(
      comment => comment.creationDate != date
    );
    commit("setComment", removeComment);
  }
};

const mutations = {
  setEvents(state, events) {
    state.all = [...events];
  },

  setAccident(state, event) {
    state.oneAccident = event;
  },

  setTemoins(state, event) {
    state.oneAccident.Témoins = event;
  },

   setComment(state, comment) {
     state.comments = [...comment];
   }
};

export default {
  namespaced: true,
  actions,
  state,
  mutations
};
