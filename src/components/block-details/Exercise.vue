<template>
<div class="exercise-container">
    <h5>This is an Exercise in a Workout - {{ exname }}</h5>
    <ul>
  <li v-for="index in sets" :key="index">Set #: {{ index }}</li>
</ul>
    </div>
</template>

<script>


export default {
  name: 'Block',
  props: {
    sets: Number,
    exname: String,
  }
};




</script>

<style scoped>

.exercise-container {

    background-color: blue;
    color: white;
    padding: 10px;
    margin: 20px;
    
}

.exercise-container ul {
    list-style-type: none;
}
.exercise-container li {

    background-color: lightblue;
    color: black;
    padding: 5px;
    margin: 5px;
    

    
}

</style>
