import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";

import global from "./config";
import featured from "./featured";
import trending from "./trending";
import movies from "./movies";
import tv from "./tv";

Vue.use(Vuex);

const store = {
  modules: {
    featured,
    trending,
    movies,
    tv,
    global
  },
  actions: {}
};

export default new Vuex.Store<RootState>(store);
