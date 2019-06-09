<template>
  <div id="app">
    <div class="content" >
      <b-card v-for="Post in Posts">
        <p><strong><h3>{{ Post.post_title }}</h3></strong></p>
      <b-card>
        <div class="contentbox">
          <p>{{ Post.post_content }}</p>

        </div>
      </b-card>
         <NewComment/>
        <b-card>
      <Comment />

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
</style>
