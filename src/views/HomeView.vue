<template>
  <p>Homeview</p>
  </template>
  <!-- <div> -->
<!--     
    <h1>{{ homePage.title }}</h1>
    <h2>{{ homePage.description }}</h2>
    <img :src="homePage.profile" width="400px" height="300px">
  </div>
</template>

<script>
export default {
  methods: {
    fetchData() {
      this.$store.dispatch('getHomePage');
    }
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    homePage() {
      return this.$store.state.homePage[0] || {}; // Access the first element of the homePage array
    }
  }
}
</script> -->
