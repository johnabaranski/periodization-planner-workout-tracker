
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    blocks: [],
  },
  mutations: {

    SET_BLOCKS(state, blocks) {
      Vue.set(state, 'blocks', blocks);
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
  }
  },
  modules: {
  },
});
