<template>
<div class="workout-container">
    <h4>This is a Workout in a Week - {{msg}}</h4>
    <Exercise exname="Squats"/>
    <Exercise exname="Calf Raise"/>
    <Exercise exname="Power Cleans"/>
    </div>
</template>

<script>
import Exercise from '@/components/block-details/Exercise.vue';

export default {
  name: 'Workout',
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

