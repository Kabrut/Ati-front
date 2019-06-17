<template>
  <div id="app">
    <MonthPick />
    <NewEvent/>
    <Events/>
  </div>
</template>

<script>
import MonthPick from '@/components/MonthPick'
import NewEvent from '@/components/NewEvent'
import Events from '@/components/Events'

export default {
  name: 'App',
  components: {Events, NewEvent, MonthPick }
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
