<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Left />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Left from './views/Left'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Left
  },
  created() {
    // window.console.log('hello', HelloWorld)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
