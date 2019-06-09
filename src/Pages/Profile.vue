<template>
  <div id="app">
    <Friendlist />
  </div>
</template>

<script>

import Friendlist from '@/components/Friendlist'

export default {
  name: 'App',
  components: { Friendlist }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
