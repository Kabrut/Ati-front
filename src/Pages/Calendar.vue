<template>
  <div id="app">
    <MonthPick />
  </div>
</template>

<script>
import MonthPick from '@/components/MonthPick'

export default {
  name: 'App',
  components: { MonthPick }
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
