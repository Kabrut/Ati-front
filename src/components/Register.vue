<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          id="modalTitle"
          class="modal-header"
        >
          <slot name="header">
            <h2>Rejestracja</h2>

            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              🡸
            </button>
          </slot>
        </header>
        <section
          id="modalDescription"
          class="modal-body"
        >
          <slot name="body">
            <h3>Login</h3>
            <input type="text" v-model="Register.login"/>
            <h3>Imie</h3>
            <input type="text"
            v-model ="Register.name">
            <h3>Nazwisko</h3>
            <input type="text"
            v-model="Register.surname">
            <h3>Hasło</h3>
            <input type="password"
            v-model="Register.password">
            <h3>E-mail</h3>
            <input type="email"
            v-model="Register.email">
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="createUser()"
            >
              Zarejestruj
            </button>
            <button
              type="button"
              class="btn-green"
              aria-label="Close modal"
              @click="close"
            >
              Wstecz
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      response: [],
      errors: [],
      Register: {
        login: '',
        name: '',
        surname: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    createUser () {
      var params = new URLSearchParams()
      params.append('login', this.Register.login)
      params.append('name', this.Register.name)
      params.append('surname', this.Register.surname)
      params.append('email', this.Register.email)
      params.append('password', this.Register.password)

      axios.post(`http://localhost:8000/user`, params)
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
 .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-backdrop:not(.show):not(.fade){
    opacity:1;
  }
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 400px;
    height:500px;
    position:relative;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    overflow:scroll;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    margin:5px;
    padding:10px;
    position:center;
  }
  #modalDescription{
    margin-bottom: 15px;
  }
</style>
