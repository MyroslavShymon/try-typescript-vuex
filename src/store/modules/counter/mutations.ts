import { MutationTree } from "vuex";

import { MutationNames } from "./types/actions-mutations-names-list";
import { MutationsType, StateType } from "./types";

export const mutations: MutationTree<StateType> & MutationsType = {
  [MutationNames.SET_COUNTER](state, payload: number) {
    state.counter = payload;
  },
};
