<template>
<div class="workout-container">
    <h4>{{msg}}</h4>
    <div v-for="exercise in exercises.exercise" :key="exercise.exercise">
          <Exercise :exname="exercise.title" :id="exercise.id" :sets="exercise"/>
      </div>
    </div>
</template>

<script>
import Exercise from '@/components/block-details/Exercise.vue';

export default {
  name: 'Workout',
  props: {
    msg: String,
    id: String,
    exercises: Object
  },
components: {
    Exercise,
  },
};




</script>

<style scoped>

.workout-container {

    background-color: beige;
    padding: 10px;
    margin: 20px;
    text-align: left;
    
}

</style>

