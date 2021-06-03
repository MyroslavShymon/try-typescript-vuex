<template>
  <section>
    <h2>Options API Component</h2>
    <p>Counter: {{ counter }}, doubled counter: {{ doubledCounter }}</p>
    <input v-model.number="counter" type="text" />
    <button type="button" @click="resetCounter">Reset counter</button>
    <button type="button" @click="getCounter">Get counter async</button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  MutationNames,
  ActionNames,
} from "@/store/modules/counter/types/actions-mutations-names-list";

export default defineComponent({
  name: "OptionsAPIComponent",
  computed: {
    counter: {
      get() {
        return this.$store.state.counter.counter;
      },
      set(value: number) {
        this.$store.commit(MutationNames.SET_COUNTER, value);
      },
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
  },
  methods: {
    resetCounter() {
      this.$store.commit(MutationNames.SET_COUNTER, 0);
    },
    async getCounter() {
      const result = await this.$store.dispatch(
        ActionNames.GET_COUTNER_ASYNC,
        256
      );
      console.log("ActionNames.GET_COUTNER_ASYNC async result = ", result);
    },
  },
});
</script>
