<script>
import Register from './Register'
export default {
  name: 'Login',
  components: { Register },
  data () {
    return {
      isModalVisibl: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    showModa () {
      this.isModalVisibl = true
    },
    closeModa () {
      this.isModalVisibl = false
    }
  }
}
</script>
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
            <h2>Zaloguj</h2>

            <button
              type="button"
              class="btn-close"
              aria-label="Close modal"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body modalDescription"
        >
          <slot name="body">
            <h3>Login</h3>
            <input type="text">
            <h3>Hasło</h3>
            <input type="password">
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              aria-label="Close modal"
              @click="close"
            >
              Zaloguj
            </button>
            <!--
            <button
              type="button"
              class="btn-green"
              aria-label="Close modal"
              @click="close"
            >
              Zarejestruj
            </button> -->
            <button
              type="button"
              class="btn-green"
              @click="showModa"
            >
              Zarejestruj
            </button>
            <Register
              v-show="isModalVisibl"
              @close="closeModa"

            >
              <!-- cos nowego -->
            </Register>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
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
    height:400px;
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
