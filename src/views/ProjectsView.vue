<template>

    
    <h1 class="display-2 mt-5 slide-in">Projects</h1>
    <div class="container">
      
        <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col" v-for="project in Projects" :key="project.id">
              <div class="col">
                    <div class="card h-100">
                      <img :src="project.url" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">{{ project.name}}</h5>
                        
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <a :href="project.github" class="btn btn-primary me-4" target="blank">github</a>
                        <a :href="project.vercel" class="btn btn-primary" target="blank">vercel</a>
                      </div>
                      <div class="card-footer bg-primary tex-white">
                        <!-- <small class="text-body-secondary  text-white">Last updated 3 mins ago</small> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          
    <footer>
        <p>&copy; Siyamthandatsobo</p>
    </footer>
  </template>
  



<script>
export default {
    methods: {
      fetchData() {
        this.$store.dispatch('getProjects'); // Dispatch the 'fetchdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      Projects() {
        return this.$store.state.projects || []
      }
    }
  }

</script>
<style>
.card-img-top{
    height:250px;
}
.card{
  width:250px;
  margin:15px;
}
footer {
  text-align: center;
  padding: 20px;
  background-color: rgb(51, 51, 51);
  color: rgb(235, 20, 152);
  bottom: 0;
  width: 100%;
}
</style>