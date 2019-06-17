<template>
    <div id="app">
    <div class="content" >
      <b-card v-for="Event in Events">
        <p><strong><h3>{{ Event.event_title }} </h3> </strong> </p>
      <b-card>
        <div class="contentbox">
          <p>{{ Event.event_header }}</p>

        </div>
      </b-card>
        <br>
        <b-button>Więcej</b-button>
    </b-card>
    </div>
    </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Events',
  data () {
    return {
      Events: []
    }
  },
  methods: {
    showEvent () {
      axios.get(`http://localhost:8000/showEvent`)
        .then(response => {
          this.Events = response.data.reverse()
          console.log(response.Post)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted () {
    this.showEvent()
  }
}
</script>

<style scoped>
#app{

  width:100%;
  float:left;
  margin: 10px;

}
  .content{
    display:flex;
    flex-direction: row;

  }
  .card{
    width:30%;
    margin: 10px;
  }
  .card .card-body .card{
    width: 100%;
  }
</style>
