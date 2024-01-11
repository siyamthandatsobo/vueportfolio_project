import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    navLinks: [],
    resume:[],
    projects:[],
    reviews:[],
    education:[],
    footer:[],
    contentHeadings:[]

  },
  mutations: {
    setNav(state, navLinks) {
      state.navLinks = navLinks;
    },
    setResume(state, resume) {
      state.resume = resume;
    },

    setProjects(state, projects) {
      state.projects = projects;
    },
    setReviews(state, reviews) {
      state.reviews = reviews;
    },
    setEducation(state, education) {
      state.education = education;
    },
    setFooter(state, footer) {
      state.footer = footer;
    },
    setContentHeadings(state, contentHeadings) {
      console.log(contentHeadings);
      state.contentHeadings = contentHeadings;
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

    async getProjects({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/Projects');
        console.log(response.data); // Check the structure of response.data
        commit('setProjects', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Projects:', error);
      }
    },
    async getReviews({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/Reviews');
        console.log(response.data); // Check the structure of response.data
        commit('setReviews', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Reviews:', error);
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
    },
    async getFooter({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/Footer');
        console.log(response.data); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setFooter', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Resume:', error);

      }
    },
    async getContentHeadings({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/ContentHeadings');
        console.log(response.data); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setContentHeadings', response.data); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Headings:', error);

      }
    }
  }
});
