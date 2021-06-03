import { ActionTree } from "vuex";
import { ActionsType, StateType } from "./types";
import {
  ActionNames,
  MutationNames,
} from "./types/actions-mutations-names-list";

export const actions: ActionTree<StateType, StateType> & ActionsType = {
  [ActionNames.GET_COUTNER_ASYNC]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256;
        commit(MutationNames.SET_COUNTER, data);
        resolve(data);
      }, 500);
    });
  },
};
