<template>
  <div>

    <b-button
      v-b-toggle.collapse-1
      variant="primary"
    >
      Dodaj Post
    </b-button>
    <b-collapse
      id="collapse-1"
      class="mt-2"
    >
      <b-card>
        <p class="card-text" /><p>Tytuł Posta</p>
        <input
          v-model="NewPost.title"
          type="text"
          class="title"

        >
        <p>Zawartość</p>
        <input
          v-model="NewPost.content"
          type="text"
          class="content"

        >
        <br><br>
        <div class="checkboxes">
          <input type="checkbox" id="ads" value="1" v-model="checkedItems">
        <label for="ads">Ogłoszenia</label>
          <input type="checkbox" id="info" value="2" v-model="checkedItems">
        <label for="info">Informacje</label>
          <input type="checkbox" id="warr" value="3" v-model="checkedItems">
        <label for="warr">Ostrzeżenia</label>
        </div>
        <b-button @click="addPost()">Dodaj Post</b-button>
        {{checkedNames}}
        </p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewPost',
  data () {
    return {
      response: [],
      errors: [],
      checkedItems: [],
      NewPost: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    addPost () {
      var params = new URLSearchParams()
      params.append('post_title', this.NewPost.title)
      params.append('post_content', this.NewPost.content)
      params.append('categoryList', this.checkedItems)
      axios.post(`http://localhost:8000/post`, params)
        .then(response => {
          this.response = response.data
          console.log(response.data)
          this.showResponse = true
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
.postbox{
  margin:0px!important;
}
</style>
