<template>
  <div id="app">
   <side-ads />
    <div class="postbox">
      <div class="postbutton">
      <NewPost /></div>
      <Posts />
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
      question: 'What you think about Vue.js',
      comments: [],
      loading: false
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
