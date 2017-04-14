import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    closeTrainingModal () {
      this.$emit('closeModalFromEB')
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
