<template>
  <div id="app">
    <div class="content" >
      <b-card v-for="Post in Posts">
        <div class="delete_post"><b-button v-on:click="deletePost(Post.post_id)">Usuń</b-button></div>
        <p><strong><h3>{{ Post.post_title }}</h3></strong></p>
      <b-card>
        <div class="contentbox">
          <p>{{ Post.post_content }}</p>

        </div>
      </b-card>
         <NewComment :post_id = "Post.post_id"/>
        <b-card>
      <Comment :post_id = "Post.post_id"/>

    </b-card>

      </b-card>
    </div>

    {{ errors }}
  </div>

</template>

<script>
import Comment from './Comment'
import axios from 'axios'
import NewComment from './NewComment'

export default {
  name: 'Posts',
  components: {NewComment, Comment},
  data () {
    return {
      Posts: [],
      errors: []
    }
  },
  methods: {
    showPost () {
      axios.get(`http://localhost:8000/show`)
        .then(response => {
          this.Posts = response.data.reverse()
          console.log(response.Post)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deletePost (post_id) {
      axios.delete(`http://localhost:8000/posts/${post_id}`)
        .then(response => {
          console.log(response)
        })
    }
  },
  created () {
    this.showPost()
  }
}
</script>

<style scoped>
  #app{
    position:center;
  }
  .contentbox{
    height: 100px;
  }
.content{
  width:100%;
}
  .delete_post{
    float:right;
    display: block;
  }
</style>
