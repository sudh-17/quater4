<template>
  <div class="wrapper">
    <div>
      <p>{{data1}}</p>
    </div>
    <div>
      <p>{{data2}}</p>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    data1 () {
      return this.$root.data1
    },
    data2 () {
      return this.$root.data2
    }
  },
};

</script>

<style>
.wrapper {
  background: red;
  height: 200px;
}
</style>
