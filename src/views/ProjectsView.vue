<template>

<div v-if="$store.state.resume.length>0"> 
<div v-if="Headings && Headings.length > 0">
      <h2 class="display-2 mt-4 slide-in">{{ Headings[2].Heading }}</h2>
      <h3>{{ Headings[2].description }}</h3>
    </div>
    <div v-else>
      
      <p>No headings available.</p>
    </div>
    <div class="container">
      
        <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-3">
            <div class="col" v-for="project in Projects" :key="project.id">
              <div class="col">
                    <div class="card h-100">
                      <img :src="project.url" class="card-img-top" alt="..." width="300px" height="300px">
                      <div class="card-body">
                        <h5 class="card-title">{{ project.name}}</h5>
                        
                        <p class="card-text">{{ project.info}}</p>
                        <a :href="project.github" class="btn bg-dark text-white" target="blank">github</a>
                        <a :href="project.live" class="btn btn-primary bg-dark text-white m-2" target="blank"> Go-live</a>
                      </div>
                      <div class="card-footer bg-dark">
                        <!-- <small class="text-body-secondary  text-white">Last updated 3 mins ago</small> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
</div>
<div v-else><spinner-comp></spinner-comp></div>
  </template>
  
  
  
  <script>
import spinnerComp from '@/components/spinnerComp.vue';
export default {
  components: { spinnerComp },
    methods: {
      fetchData() {
        this.$store.dispatch('getProjects');
        this.$store.dispatch('getContentHeadings'); // Dispatch the 'fetchdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      Projects() {
        return this.$store.state.projects || []
      },
      Headings(){
        return this.$store.state.contentHeadings || [] // Access 'resume' state from Vuex

      }
    }
  }

</script>
<style>
.card-img-top{
    height:200px;
}
.card{
  width:300px;
  margin:40px;
}
@media screen and (max-width: 576px) {
  .card {
     
     /* Adjust the width as needed for smaller screens */
      max-width: 100%;
      margin:0px;
      padding-bottom:20px;
    /* Additional styling for smaller screens goes here */
  }
}
@media screen and (min-width: 577px) and (max-width: 992px) {
  .card {
    max-width: 80%;
    /* Adjust the width as needed for medium screens */
    /* Additional styling for medium screens goes here */
  }
  a{
    display:flex;
    margin:10px;

  }
}

</style>