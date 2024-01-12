import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    navLinks: [],
    resume:[],
    projects:[],
    reviews:[],
    education:[],
    contentHeadings:[],
    footer:[]

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
    setContentHeadings(state, contentHeadings) {
      console.log(contentHeadings);
      state.contentHeadings = contentHeadings;
    },
    setFooter(state, footer) {
      console.log(footer);
      state.footer = footer;
    }
  },
  actions: {
    async getNavLinks({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); // Check the structure of response.data
        commit('setNav', response.data.navLinks); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Nvlinks:', error);
      }
    },
    async getResume({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); // Check the structure of response.data
        commit('setResume', response.data.Resume); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Resume:', error);
      }
    },

    async getProjects({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); // Check the structure of response.data
        commit('setProjects', response.data.Projects); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Projects:', error);
      }
    },
    async getReviews({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); // Check the structure of response.data
        commit('setReviews', response.data.Reviews); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Reviews:', error);
      }
    },
    async getEducation({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data.Education); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setEducation', response.data.Education); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Resume:', error);

      }
    },
    
    async getContentHeadings({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setContentHeadings', response.data.ContentHeadings); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Headings:', error);

      }
    },
    async getFooter({ commit }) {
      try {
        const response = await axios.get('https://siyamthandatsobo.github.io/vueportfolio-data/');
        console.log(response.data); 
        console.log("This is a test"); // Check the structure of response.data
        commit('setFooter', response.data.Footer); // Commit the data to the Vuex store
      } catch (error) {
        console.error('Error fetching Footer:', error);

      }
    }
  }
});
