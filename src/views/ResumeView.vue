<template>
  <div v-if="$store.state.resume.length>0">

    
    <div v-if="Headings && Headings.length > 0">
      <h2 class="display-2 mt-4 slide-in">{{ Headings[0].Heading }}</h2>
      <h3>{{ Headings[0].description }}</h3>
    </div>
    <div v-else>
      
      <p>No headings available.</p>
    </div>
 <div class="container container-fluid cards-container">

   <div class="row  row-cols-1 row-cols-md-3 g-3">
     
         <div class="col my-card" v-for="skill in Resume" :key="skill.id" >
            <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                        <img :src="skill.url" width="200px" height="170px">
                    </div>
                    <div class="card-back">
                        <p>{{ skill.title }}-{{skill.desc  }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    <!-- <h2 class="display-2 mt-5"> Education</h2>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Spesbona High</h5>
      <h6 class="card-subtitle mb-2 text-muted">National senior certificate</h6>
      <p class="card-text">2018-2022 </p>
      <p class="card-text">High school Diploma</p>
    </div>
  </div> -->
  <div v-if="Headings && Headings.length > 0">
    <h2 class="display-2 mt-4 slide-in">{{ Headings[1].Heading }}</h2>
    <h3>{{ Headings[1].description }}</h3>
  </div>
    <div v-else>
      
      <p>No headings available.</p>
      {{ Headings }}
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-0">
        <div class="col" v-for="edu in Education" :key="edu.id">
          <div class="card h-100 ">
            <img :src="edu.url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ edu.School}}</h5>
              <p class="card-text">{{ edu.duration }}-{{edu.Qualification }}</p>
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
        this.$store.dispatch('getResume');
        this.$store.dispatch('getEducation');
        this.$store.dispatch('getContentHeadings');
         // Dispatch the 'getdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      Resume() {
        return this.$store.state.resume || [] // Access 'resume' state from Vuex
      },
      Education(){
        return this.$store.state.education || [] // Access 'resume' state from Vuex

      },
      Headings(){
        return this.$store.state.contentHeadings || [] // Access 'resume' state from Vuex

      }
    }
  }

</script>

<style scoped>
.card {
  width: 250px;
  height: 200px;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  margin: 20px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.999s;
  transition: -webkit-transform 0.999s;
  transition: transform 0.999s;
  transition: transform 0.999s, -webkit-transform 0.999s;
}

.card:hover .card-inner {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

.card-front {
  background-color: #f0e1f0;
  color: #1e1b1b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  
  border-radius: 10px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 24px;
  -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
}

.card-back {
  background-color: #a27f9c;
  color: #141212;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 10px solid #e600ff;
  border-radius: 10px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 24px;
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
.container {
  margin-bottom: 50px; /* Adjust this value as needed */
}

</style>
