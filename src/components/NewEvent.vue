<template>
<div>
    <b-button
      v-b-toggle.collapse-1
      variant="primary"
    >
      Dodaj Wydarzenie
    </b-button>
    <b-collapse
      id="collapse-1"
      class="mt-2"
    >
      <b-card>
        <p class="card-text" /><p>Tytuł Wydarzenia</p>
        <input
          v-model="NewEvent.title"
          type="text"
          class="title"

        >
        <p>Zawartość</p>
        <input
          v-model="NewEvent.content"
          type="text"
          class="content">
        <p> Tytuł nagłówka </p>
        <input
          v-model="NewEvent.headers"
          type="text"
          class="header"><br><br>
        <date-picker
          v-model="dateq"
          value-type="format"
          :lang="lang"
          type="Month"
          format="YYYY-MM-DD"/>
          <br><br>

        <b-button @click="addEvent()" >Dodaj Wydarzenie</b-button>
        {{dateq}}
        <br>
        {{bringmeadate}}
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import axios from 'axios'
export default {
  components: { DatePicker },
  name: 'NewEvent',
  data () {
    return {
      dateq: '',

      NewEvent: {
        title: '',
        content: '',
        headers: ''
      },
      lang: {
        days: ['Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
        months: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Wybierz datę',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
    }
  },
  methods: {

    addEvent: async function () {
      var params = new URLSearchParams()
      params.append('event_title', this.NewEvent.title)
      params.append('event_content', this.NewEvent.content)
      params.append('event_header', this.NewEvent.headers)
      params.append('event_date', this.dateq)
      axios.post(`http://localhost:8000/event`, params)
        .then(response => {
          this.response = response.data
          console.log(response.data)
          this.showResponse = true
        })
        .catch(e => {
          this.errors.push(e)
        })
      await this.$nextTick()
      this.$emit('addEvent')
    }
  }

}
</script>

<style scoped>

</style>
