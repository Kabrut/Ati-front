<template>
  <div class="commentbox">
    <b-button
      v-b-toggle.collapse-3
      variant="primary"
      > Pokaż komentarze</b-button>
    <div class="loop" v-for="Comment in Comments">

      <b-collapse
      id="collapse-3"
      class="mt-2"
    >
      <b-card>
    <div class="image">
     <img
        src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
        style="width:50px"
      >
      </div>
        <div class="delete">
          <b-button v-bind:value="Comment.comment_id" v-on:click="deleteComment(Comment.comment_id)">delete</b-button>
        </div>
    <div class="name">
      <p></p>
    </div>
    <div class="content">{{ Comment.comment_content }}</div>
        </b-card>
      </b-collapse>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Comment',
  data () {
    return {
      Comments: [],
      response: []
    }
  },
  methods: {
    showComment () {
      axios.get(`http://localhost:8000/showComment`)
        .then(response => {
          this.Comments = response.data.reverse()
          console.log(response.Comments)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteComment (comment_id) {
      axios.delete(`http://localhost:8000/comments/${comment_id}`)
        .then(response => {
          console.log(response)
        })
    }
  },
  created () {
    this.showComment()
  }
}
</script>

<style scoped>
  .commentbox{
    padding:0px;
  }
.name{
  float:left;
}
  .content{
    width:100%;
    padding:0px;
  }
  .image{
    float:left;
  }
.delete{
  float:right;
  display:block;
}
</style>
