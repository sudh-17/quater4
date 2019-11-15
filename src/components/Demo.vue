<template>
  <div>{{value}}</div>
</template>

<script>
export default {
  computed: {
    value () {
      return this.$root.person
    }
  }
}
</script>

<style>

</style>