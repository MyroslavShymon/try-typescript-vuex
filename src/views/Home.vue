<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div>
      <p button @click="callAdd">Add!</p>
      <p>Result: {{ result }}</p>
    </div>
  </div>
  <div>Home 2</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
const Module = require("../../dist/js/js_plumbing");

const loadWasm = new Promise((resolve) => {
  Module({
    onRuntimeInitialized() {
      resolve(this); // "this" is Module
    },
  });
});

@Options({
  components: {
    HelloWorld,
  },

  data() {
    return {
      result: null,
    };
  },
  methods: {
    callAdd() {
      loadWasm.then((instance: any): void => {
        console.log(instance._Add(2, 3));

        this.result = instance._Add(1, 2);
      });
    },
  },
})
export default class Home extends Vue {}
</script>
