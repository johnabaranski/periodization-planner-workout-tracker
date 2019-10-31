<template>
  <div class="home">
    <Canvas msg="Yearly Periodization Chart"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/periodization-canvas/Canvas.vue';

export default {
  name: 'home',
  components: {
    Canvas,
  },
};
</script>
