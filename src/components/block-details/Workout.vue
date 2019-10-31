<template>
<div class="workout-container">
    <h4>This is a Workout in a Week - {{msg}}</h4>
    <Exercise 
    :sets=5 
    exname="Squats"/>
    <Exercise 
    :sets=4 
    exname="Calf Raise"/>
    <Exercise 
    :sets=3 
    exname="Power Cleans"/>
    </div>
</template>

<script>
import Exercise from '@/components/block-details/Exercise.vue';

export default {
  name: 'Block',
  props: {
    msg: String,
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

