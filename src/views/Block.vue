<template>
  <div class="block">
    <Block msg="This is a block which will get it's value from Vuex based on the id of the block"/>
    <p>This will contain a list of weeks.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Block from '@/components/block-details/Block.vue';

export default {
  name: 'block',
  components: {
    Block,
  },
};
</script>
