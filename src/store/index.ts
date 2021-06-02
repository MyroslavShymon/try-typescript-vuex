import { createStore } from "vuex";
import { counter } from "./modules/counter/index";

export const store = createStore({
  modules: { counter },
});
