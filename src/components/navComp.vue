<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Siyamthanda Tsobo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="link in navComp" :key="link.id" class="nav-item">
            <router-link :to="link.url" class="nav-link">{{ link.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>


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