<template>
  <div class="wrapper">
    <div>
      <!-- <p>{{name}}</p> -->
    </div>
    <div>
      <!-- <p>{{value}}</p> -->
    </div>
  </div>
</template>

<script>
import { leftApi, queue } from "../left-api";
window.console.log(leftApi, queue);
let comp = {};

export default {
  created() {
    this.format();
  },
  computed: {
    ...comp
  },
  methods: {
    format() {
      Object.keys(queue).forEach(key => {
        comp[key] = function() {
          return this.$root[key];
        };
      });
    }
  }
};
</script>

<style>
.wrapper {
  background: red;
  height: 200px;
}
</style>
