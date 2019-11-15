<template>
  <div class="hello">
    <h1>{{ aa }}</h1>
    <Demo />
  </div>
</template>

<script>
import Demo from './Demo'
export default {
  name: 'HelloWorld',
  components: {
    Demo
  },
  props: {
    msg: String
  },
  computed: {
    aa () {
      return this.$root.a
    }
  }
}
</script>