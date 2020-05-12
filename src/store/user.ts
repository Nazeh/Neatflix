import { GenericItem, RootState } from "./types";

interface State {
  likes: { [id: string]: true };
  listed: { [id: string]: true };
  watched: { [id: string]: true };
}

interface Context {
  commit: Function;
  dispatch: Function;
  getters: {};
  rootGetters: {};
  rootState: RootState;
  state: State;
}

export default {
  namespaced: true,
  state: {
    likes: {},
    listed: {},
    watched: {}
  },
  mutations: {
    SWITCH_LIKE(state: State, id: number) {
      if (state.likes[id]) {
        delete state.likes[id];
        state.likes = { ...state.likes };
      } else {
        state.likes = { ...state.likes, [id]: true };
      }
    },
    SWITCH_WATCHED(state: State, id: number) {
      if (state.watched[id]) {
        delete state.watched[id];
        state.watched = { ...state.watched };
      } else {
        state.watched = { ...state.watched, [id]: true };
      }
    },
    SWITCH_LISTED(state: State, id: number) {
      if (state.listed[id]) {
        delete state.listed[id];
        state.listed = { ...state.listed };
      } else {
        state.listed = { ...state.listed, [id]: true };
      }
    }
  },
  actions: {
    like(context: any, payload: GenericItem) {
      context.commit("SWITCH_LIKE", payload.id);
    },
    watch(context: any, payload: GenericItem) {
      context.commit("SWITCH_WATCHED", payload.id);
    },
    list(context: any, payload: GenericItem) {
      context.commit("SWITCH_LISTED", payload.id);
    }
  },
  getters: {}
};
