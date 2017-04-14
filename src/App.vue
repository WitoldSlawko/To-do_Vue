<template>
  <div class="wrapper">
      <div class="containter">
        <appTrainings></appTrainings>
        <workout></workout>
      </div>
  </div>
</template>

<script>
import Trainings from './components/Trainings.vue'
import Workout from './components/Workout.vue'
import mixin from './mixin.js'

 export default {
   data () {
     return {
      message: "Hello",
      fruits: [
        'Apple',
        'Banana'
      ] 
     } 
   },
   mixins: [mixin],
   created () {
      console.log('created from comp')
   },
   methods: {
     showMsg (msg) {
       console.log(msg)
     }
   },
   components: {
    appTrainings: Trainings,
    Workout
   }
 }  
</script>

<style>
  .wrapper {
    background-color: #ffd700;
    overflow: hidden;
  }
</style>