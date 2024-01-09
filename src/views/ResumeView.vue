<template>
 <div class="container mt-5">
  <h2 class="display-2">Skills</h2>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="skill in Resume" :key="skill.id">
      <div class="card h-100 ">
        <div class="card-body">
          <h5 class="card-title">{{ skill.title }}</h5>
          <p class="card-text">Description for {{ skill.title }} goes here.</p>
        </div>
      </div>
    </div>
  </div>
 </div>
  <h2 class="display-2 mt-5"> Education</h2>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Spesbona High</h5>
      <h6 class="card-subtitle mb-2 text-muted">National senior certificate</h6>
      <p class="card-text">2018-2022 </p>
      <p class="card-text">High school Diploma</p>
    </div>
  </div>

</template>
<script>
export default {
    methods: {
      fetchData() {
        this.$store.dispatch('getResume'); // Dispatch the 'getdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      Resume() {
        return this.$store.state.resume || [] // Access 'jobs' state from Vuex
      }
    }
  }

</script>
<style>
.card {
  border: 1px solid #0e0e0e;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
</style>