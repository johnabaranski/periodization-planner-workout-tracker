<template>
<div class="exercise-container">
    <h5>This is an Exercise in a Workout - {{ exname }}</h5>
    
  <!-- <li v-for="index in sets" :key="index">Set #: {{ index }}</li> -->
      <!-- <Set :rpe=8 reps="5" weight="200" v-for="index in sets" :key="index"/> -->
    <Set rpe="8" reps="5" weight="200" />
    <Set rpe="7" reps="6" weight="200" />
    </div>
</template>

<script>

import Set from '@/components/block-details/Set.vue';

export default {
  name: 'Exercise',
  props: {
    exname: String,
  },
  components: {
    Set,
  },
};




</script>

<style scoped>

.exercise-container {

    background-color: blue;
    color: white;
    padding: 10px;
    margin: 20px;
    
}



</style>
