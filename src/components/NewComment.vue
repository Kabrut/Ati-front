<template>
  <div>
    <b-button
      v-b-toggle.collapse-2
      variant="primary"
    >
      Dodaj Komentarz
    </b-button>
    <b-collapse
      id="collapse-2"
      class="mt-2"
    >
      <b-card>
        <input
          v-model="NewComment.content"
          type="text"
          class="content"
        >
        <br><br>
        <b-button @click="addComment()">Dodaj Komentarz</b-button>
      </b-card>
      {{post_id}}
    </b-collapse>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewComment',
  props: ['post_id'],
  data () {
    return {
      response: [],
      errors: [],
      NewComment: {
        content: ''
      }
    }
  },
  methods: {
    addComment () {
      var params = new URLSearchParams()
      params.append('comment_content', this.NewComment.content)

      axios.post(`http://localhost:8000/comment/post/${this.post_id}`, params)
        .then(response => {
          this.response = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
      this.$emit('added')
    }
  }
}
</script>

<style scoped>

</style>
