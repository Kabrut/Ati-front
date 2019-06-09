<template>
  <div id="App">
    <ul>
      <li> Ogłoszenia</li>
      <li> Informacje</li>
      <li> Ostrzeżenia</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideAds'
}
</script>
<style scoped>
   #App {
    float: left;
    background-color: #5597b4;
    width: 25%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  li {
    list-style: none;
    text-align: center;
    padding: 10px!important;
    width: 30px;
  }

  li:hover {
    background-color: darkorange;
  }

  ul {
    padding: 0;
    display: flex;
    flex-direction: column;

  }

</style>
