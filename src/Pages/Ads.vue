<template>
  <div id="app">
   <side-ads />
    <div class="postbox">
      <div class="postbutton">
      <NewPost v-on:addPost="recreate" /></div>
      <Posts v-on:updated="recreate" v-on:delpost="recreate" :key="postkey"/>
    </div>
  </div>
</template>

<script>

// import CommentForm from '../../components/CommentForm.vue'

import Posts from '../components/Posts'
import SideAds from '../components/Side-ads'
import NewPost from '../components/NewPost'

export default {

  components: {
    NewPost,
    SideAds,
    Posts
    // CommentForm
  },

  data () {
    return {
      postkey: 0,
      comments: [],
      loading: false
    }
  },
  methods: {
    recreate () {
      this.postkey += 1
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
nav ul {
  margin-top: 30px;
}
  .postbox{
    padding:25px;
    margin:10px;
  }
.postbutton{
  padding:20px;
}
</style>
