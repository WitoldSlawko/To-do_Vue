<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <SingleTraining v-for="training in trainings"
      :training="training"
      @trainingWasChosen="chooseTraining($event)"
    ></SingleTraining>
    <transition name="showModal" type="animation">
      <TrainingModal 
        v-if="showModal"
        :training="chosenTraining"
      ></TrainingModal>
    </transition>
  </div>
</template>

<script>
  import SingleTraining from './SingleTraining.vue'
  import TrainingModal from './TrainingModal.vue'
  import mock from '../mock.js'
  import { eventBus } from '../main.js'

  export default {
    data () {
      return {
        trainings: mock,
        chosenTraining: {},
        showModal: false
      }
    },
    components: {
      SingleTraining,
      TrainingModal
    },
    created () {
      eventBus.$on('closeModalFromEB', () => {
        this.showModal = false
      })
    },
    methods: {
      chooseTraining (data) {
        this.chosenTraining = data
        this.showModal = true
      }
    }
  }
</script>

<style>
  .showModal-enter {
    opacity: 0;
  }
  .showModal-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .showModal-enter-to {
    opacity: 1
  }

  @keyframes slide-in {
    from {
      transform: translateY(40px)
    }
    to {
      transform: translateY(0)
    }
  }

</style>