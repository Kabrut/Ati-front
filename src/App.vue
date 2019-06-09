<template>
  <div id="app">

     <div id="main">
    <nav>
      <router-link to="/Home"
        class="home"
      >Strona główna</router-link>
      <router-link to="/"
        class="ads"
      >Ogłoszenia</router-link>
      <router-link to="/calendar"
        class="calendar"
      >Kalendarz</router-link>
      <a
        class="zaloguj"
        @click="showModal"
      >Zaloguj</a>
      <Login
      v-show="isModalVisible"
      @close="closeModal"
    />
      <router-link to="/profile"
        class="profil"
      ><img src="@/assets/user.png"
            href="profile"></router-link>

    </nav>
     </div>
    <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'App',
  components: {Login},
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
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

  nav{
    display:block;
    background-color:#5597b4;

  }

  nav a{
    display:inline-block;
    padding: 18px 30px;
    color:#fff !important;
    font-weight:bold;
    font-size:16px;
    text-decoration:none !important;
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;

    -webkit-transition:background-color 0.25s;
    -moz-transition:background-color 0.25s;
    transition:background-color 0.25s;
  }

  nav a:first-child{
    border-radius:2px 0 0 2px;
  }

  nav a:last-child{
    border-radius:0 2px 2px 0;
  }

  nav.home .home,
  nav.projects .projects,
  nav.services .services,
  nav.contact .contact{
    background-color:#e35885;
  }

  p{
    font-size:22px;
    font-weight:bold;
    color:#7d9098;
  }

  p b{
    color:#ffffff;
    display:inline-block;
    padding:5px 10px;
    background-color:#c4d7e0;
    border-radius:2px;
    text-transform:uppercase;
    font-size:18px;
  }
  .resource {
    margin: 20px 0;
  }
.profil{
  float: right;
  padding: 2px;

}
  .profil img{
    display: block;
    height: 50px;
    margin: 0;
  }
  .zaloguj{
    float:left;
  }

</style>
