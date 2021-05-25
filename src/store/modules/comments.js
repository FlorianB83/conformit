import comments from "../../api/comments";


const state = () => ({
    editing: false,
  });


  const actions = {
    getComment({ commit }, id) {
      commit("setComment", comments.getComment(id));
    },
    
    editComment({commit}, editing){
      this.state.comments.editing = !editing;
      commit("setComment");
    },
  };
  const mutations = {
    setComment(state, comment) {
      state.comments = [...comment];
      },
  }

  export default {
    namespaced: true,
    state,
    actions,
    mutations
  }