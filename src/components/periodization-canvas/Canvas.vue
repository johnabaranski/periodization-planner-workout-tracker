<template>
  <div class="row">
    <div class="col-md-12">
      <div class="jumbotron"><h1>Periodization Timeline</h1></div>
    <!-- <div>
    <p>Blocks test - List from Vuex</p>
      <ul>
      <li v-for="block in blocks" :key="block.id">{{ block.title }} </li>
      </ul>
    </div> -->

      <div class="swiper-container">
        <p class="swiper-control">
          <button type="button" class="btn btn-default btn-sm prev-slide">Prev</button>
          <button type="button" class="btn btn-default btn-sm next-slide">Next</button>
        </p>
        <!-- <div class="swiper-wrapper timeline">
          <div class="swiper-slide" v-for="item in steps" v-bind:key="item">
            <div class="timestamp">
              <span class="date">{{item.dateLabel}}</span>
            </div>
            <div class="status">
                  <span><router-link :to="{ name: 'block', params: { id: item.id }}">{{item.title}}</router-link></span> 
            </div>
          </div> -->
          <div class="swiper-wrapper timeline">
          <div class="swiper-slide" v-for="block in blocks" :key="block.id">
            <div class="timestamp">
              <span class="date">{{ block.timeframe }}</span>
            </div>
            <div class="status">
                  <span><router-link :to="{ name: 'block', params: { id: block.id }}">{{ block.title }}</router-link></span> 
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>



</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'Canvas',
  props: {
    msg: String,
  },

  mounted() {
      const swiper = new Swiper('.swiper-container', {
      //pagination: '.swiper-pagination',
      slidesPerView: 4,
      grabCursor: true,
      paginationClickable: true,
      nextButton: '.next-slide',
      prevButton: '.prev-slide',
    });   

    this.$store.dispatch('getBlocks') 
  },
  computed: mapState([
    'blocks'
  ])
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background: white;
}
#app {
  padding: 50px 0;
}
.timeline {
  margin: 50px 0;
  list-style-type: none;
  display: flex;
  padding: 0;
  text-align: center;
}
.timeline li {
  transition: all 200ms ease-in;
}
.timestamp {
  width: 250px;
  margin-bottom: 20px;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 100; 
}
.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 4px solid #3e70ff;
  position: relative;
  transition: all 200ms ease-in ;
}
  
.status span {
  font-weight: 600;
  padding-top: 20px;
}
.status span:before {
  content: '';
  width: 25px;
  height: 25px;
  background-color: #e8eeff;
  border-radius: 25px;
  border: 4px solid #3e70ff;
  position: absolute;
  top: -15px;
  left: 42%;
  transition: all 200ms ease-in;
}
.swiper-control {
  text-align: right;
}

.swiper-container {
  width: 100%;
  height: 250px;
  margin: 50px 0;
  overflow: hidden;
  padding: 0 20px 30px 20px;
}
.swiper-slide {
  width: 200px;
  text-align: center;
  font-size: 18px;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}

</style>
