<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top" style="height: 80px;">
    <div class="container" style="padding-top: 10px; padding-bottom: 10px;">
      <a class="navbar-brand text-light" href="#">Siyamthanda Tsobo</a>
      <button class="navbar-toggler bg-white text-bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center bg-dark" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="link in navComp" :key="link.id" class="nav-item">
            <router-link :to="link.url" class="nav-link text-light">{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>
<style scoped>

nav a:hover {
  border-bottom: 3px solid #db34c8; 
  border-top: 3px solid #34db42; 
  border-left: 3px solid red; 
}
</style>


  <script>
  export default {
    methods: {
      fetchData() {
        this.$store.dispatch('getNavLinks'); // Dispatch the 'getdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      navComp() {
        return this.$store.state.navLinks; // Access 'jobs' state from Vuex
      }
    }
  }
  </script>