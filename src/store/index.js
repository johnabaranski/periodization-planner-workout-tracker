
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    blocks: [],
    weeks: [],
    workouts: []
  },
  mutations: {

  SET_BLOCKS(state, blocks) {
      Vue.set(state, 'blocks', blocks);
  },
  SET_WEEKS(state, weeks) {
    Vue.set(state, 'weeks', weeks);
},
  SET_WORKOUTS(state, workouts) {
    Vue.set(state, 'workouts', workouts);
}

  },
  actions: {
    getBlocks(context) {

      axios.get('data.json')
          .then((response) => {
              let blocks = response.data.blocks;
              //console.log(blocks.blocks[0].title);
              context.commit('SET_BLOCKS', blocks);
          });
  },
  //This is a work in progress - might need to use a getter 
  getWeeks(context, id) {

    axios.get('data.json')
        .then((response) => {
            let weeks = response.data.blocks.filter(d => d.id === id);
            //console.log(weeks[0].weeks);
            context.commit('SET_WEEKS', weeks[0].weeks);
        });
},
getWorkouts(context, payload) {

console.log(payload.blockid);
console.log(payload.weekid);

  axios.get('data.json')
      .then((response) => {
          let weeks = response.data.blocks.filter(d => d.id === payload.blockid);
          context.commit('SET_WORKOUTS', weeks[0].weeks[payload.weekid].workouts);
      });
}
  },
  modules: {
  },
});
