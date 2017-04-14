<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <h1>Training</h1>
    <div class="row" style="margin-bottom: 20px;">
      <div class="col-xs-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: progress + '%'}">
            {{ progress }}
          </div>
        </div>
      </div>
      <div class="col-xs-3 text-center">
        <div class="col-xs-6">
          <label>Minuty</label>
          <div>{{ minutes }}</div>
        </div>
        <div class="col-xs-6">
          <label>Sekundy</label>
          <div>{{ seconds }}</div>
        </div>
      </div>
    </div>
    <div class="col-xs-8 col-xs-offset-2">
      <div class="panel panel-primary">
        <div class="panel-heading">{{ training.name }}</div>
        <div class="list-group">
          <li v-for="exercise in training.exercises" 
              class="list-group-item">{{ exercise.name }}</li>
        </div>
      </div>
      <div class="col-xs-12">
        <button class="btn btn-primary center-block">Zakończ</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js'

  export default {
    data () {
      return {
        training: {},
        time: 0,
        weight: 0,
        isStarted: false,
        timer: null,
        minutes: 0,
        seconds: 0,
        currentWeight: 0
      }
    },
    watch: {
      isStarted () {
        if (this.isStarted) {
          this.timer = setInterval(() => {
            this.seconds++
            if (this.seconds === 60) {
              this.seconds = 0
              this.minutes++
            }
          }, 1000)
        } else {
          clearInterval(this.timer)
        }
      }
    },
    computed: {
      progress () {
        if (this.weight !== 0) {
          return parseInt(this.currentWeight / this.weight * 100)
        }
        return 0
      }
    },
    created () {
      eventBus.$on('trainingWasStarted', (data) => {
        this.training = data.training
        this.time = data.time
        this.weight = data.weight
        this.isStarted = true

        setInterval(() => {
            this.currentWeight += 20
          }, 2000)

      })
    }
  }
</script>