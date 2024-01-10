import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    navLinks: [],
    resume:[],
    Education:[]
  },
  mutations: {
    setNav(state, navLinks) {
      state.navLinks = navLinks;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setEducation(state, Education) {
      state.Education = Education;
    }
  },
  actions: {
    async getNavLinks({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/navLinks');
        console.log(response.data); // Check the structure of response.data
        commit('setNav', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Nvlinks:', error);
      }
    },
    async getResume({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/Resume');
        console.log(response.data); // Check the structure of response.data
        commit('setResume', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Resume:', error);
      }
    },
    async getEducation({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/Education');
        console.log(response.data); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setEducation', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Resume:', error);
      }
    }
  }
});
