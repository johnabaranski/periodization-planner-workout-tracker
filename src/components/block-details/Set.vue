<template>
<div class="set-container">
    <div class="row">
        <div class="col-lg-12">Set</div>
    </div>
    <div class="row">
        <div class="col-lg-4">Reps: {{ reps }}</div>
        <div class="col-lg-4">@ RPE: {{ rpe }}</div>
        <div class="col-lg-4">Weight: {{ weight }}</div>
    </div>

</div>
</template>


<script>


export default {
  name: 'Set',
  props: {
    rpe: String,
    reps: String,
    weight: String,
  }
};




</script>

<style>

.set-container  {

    background-color: lightblue;
    color: black;
    padding: 5px;
    margin: 5px;
    

    
}
</style>
