import { MutationTypes } from "../../mutation-types";

export interface MutationTree<S> {
  [key: typeof MutationTypes]: Mutation<S>;
}
