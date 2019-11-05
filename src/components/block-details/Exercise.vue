<template>
<div class="exercise-container">
    <h5>{{ exname }}</h5>
      <div v-for="set in sets.sets" :key="set.id">
          <Set :rpe="set.rpe" :reps="set.reps" :weight="set.weight" :distance="set.distance"/>
      </div>
    </div>
</template>

<script>

import Set from '@/components/block-details/Set.vue';

export default {
  name: 'Exercise',
  props: {
    exname: String,
    sets: Object
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
