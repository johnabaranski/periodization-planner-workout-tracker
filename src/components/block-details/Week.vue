<template>
<div class="week-container">
    <h2>This is a week in a block - {{ msg }}</h2>
    <Workout msg="Workout 1"/>
    <Workout msg="Workout 2"/>
    <Workout msg="Workout 3"/>
</div>
</template>

<script>

import Workout from '@/components/block-details/Workout.vue';

export default {
  name: 'Week',
  props: {
    msg: String,
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
