<template>
<div class="week-container">

    <h2>{{ msg }}</h2>
      <div v-for="workout in workouts.workouts" :key="workout.workouts">
          <Workout :msg="workout.title" :id="workout.id" :exercises="workout"/>
      </div>
    <!-- <Workout msg="Workout 1"/>
    <Workout msg="Workout 2"/>
    <Workout msg="Workout 3"/> -->
</div>
</template>

<script>
import { mapState } from 'vuex'
import Workout from '@/components/block-details/Workout.vue';

export default {

  name: 'Week',
  props: {
    msg: String,
    id: String,
    workouts: Object
  },
components: {
    Workout,
  },

};




</script>

<style scoped>

.week-container {

    background-color: wheat;
    padding: 10px;
    margin: 20px;
    
}

</style>
