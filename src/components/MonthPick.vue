<template>
  <div id="app">
    <div class="year">
      <button @click="back">
        ◄
      </button> <p>{{ rok }}</p><button @click="forward">
        ►
      </button>
    </div>
    <ul>
      <li>Styczeń</li>
      <li>Luty</li>
      <li>Marzec</li>
      <li>Kwiecień</li>
      <li>Maj</li>
      <li>Czerwiec</li>
      <li>Lipiec</li>
      <li>Sierpień</li>
      <li>Wrzesień</li>
      <li>Październik</li>
      <li>Listopad</li>
      <li>Grudzień</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MonthPick',
  data () {
    return {
      rok: new Date().getFullYear()
    }
  },
  methods: {
    back: function () {
      this.rok = this.rok - 1
    },
    forward: function () {
      this.rok = this.rok + 1
    },
    styczen: function () {},
    luty: function () {},
    marzec: function () {},
    kwiecien: function () {},
    maj: function () {},
    czerwiec: function () {},
    lipiec: function () {},
    sierpien: function () {},
    wrzesien: function () {},
    pazdziernik: function () {},
    listopad: function () {},
    grudzien: function () {}
  }
}
</script>

<style scoped>
 ul{
   display: flex;
   list-style: none;
   padding: 0px;
   background-color: cornflowerblue;
   justify-content: space-between;
   text-align: center;
 }
 li{
   padding:25px;
 }
  li:hover{
    background: darkorange;
    text-align: center;
  }
  .year{
    display:flex;
    justify-content: center;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }
  button{
    border:none;
    background: transparent;
    font-size: large;
    padding:10px;
    text-decoration: green;
  }
  p{
    margin-bottom: 0px;
    border:none;
    background: transparent;
    font-size: large;
    padding:10px;
    text-decoration: green;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
