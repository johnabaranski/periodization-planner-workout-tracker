<template>
<div>


  <div class="row">

    <div class="col-md-12">

    <h1>{{ msg }} : {{this.$route.params.id}}</h1>
<ul class="nav nav-pills justify-content-center">
    <li class="nav-item" v-for="weeklinks in weeks">
      <a class="nav-link" href="#">{{ weeklinks.title }}</a>
    </li>
</ul>




      <div v-for="week in weeks" :key="week.id">
          <Week :msg="week.title" :id="week.id" :workouts="week"/>
      </div>


    </div>
  </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import Week from '@/components/block-details/Week.vue';


export default {
  name: 'Block',
  props: {
    msg: String,
    id: String,
   // week: Object
  },
components: {
    Week,
  },
  mounted() {
    //this will pass the block id to the store
    this.$store.dispatch('getWeeks', this.$route.params.id) 
  },
  computed: mapState([
    'weeks'
  ])
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
