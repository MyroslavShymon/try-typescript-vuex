<template>
  <div class="about">
    <TryStore />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TryStore from "@/components/TryStore.vue"; // @ is an alias to /src

@Options({
  components: {
    TryStore,
  },
})
export default class Home extends Vue {}
</script>
