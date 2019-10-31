<template>
  <div class="row">
    <div class="col-md-12">
    <h1>{{ msg }} : {{this.$route.params.id}}</h1>
     <Week msg="Week 1" />
     <Week msg="Week 2" />
     <Week msg="Week 3" />
     <Week msg="Week 4" />
     <Week msg="Week 5"/>

    </div>
  </div>



</template>

<script>

import Week from '@/components/block-details/Week.vue';

export default {
  name: 'Block',
  props: {
    msg: String,
  },
components: {
    Week,
  },
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
