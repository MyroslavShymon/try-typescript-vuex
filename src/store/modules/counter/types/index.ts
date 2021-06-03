import { ActionContext } from "vuex";

import { state } from "../state";
import { MutationNames, ActionNames } from "./actions-mutations-names-list";

// State types and interfaces
export type StateType = typeof state;

// Mutations types and interfaces
export type MutationsType<S = StateType> = {
  [MutationNames.SET_COUNTER](state: S, payload: number): void;
};

// Actions types and interfaces
type AugmentedActionContext = {
  commit<K extends keyof MutationsType>(
    key: K,
    payload: Parameters<MutationsType[K]>[1]
  ): ReturnType<MutationsType[K]>;
} & Omit<ActionContext<StateType, StateType>, "commit">;

export interface ActionsType {
  [ActionNames.GET_COUTNER_ASYNC](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
}

// Getters types and interfaces
export type GettersType = {
  doubledCounter(state: StateType): number;
};
