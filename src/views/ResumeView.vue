<template>
 <!-- <div class="container mt-5">
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
 </div> -->
 <h1 class="display-2 mt-5">Skills</h1>
 <div class="row row-cols-1 row-cols-md-3 g-3">

     <div class="col" v-for="skill in Resume" :key="skill.id" >
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <img src="{{skill.url}}">
                </div>
                <div class="card-back">
                    <p>{{ skill.title }}</p>
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
<style scoped>
.card {
  width: 300px;
  height: 200px;
  -webkit-perspective: 1000px;
          perspective: 1000px;
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
  background-color: #6A2C70;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 10px solid #6A2C70;
  border-radius: 10px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 24px;
  -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
}

.card-back {
  background-color: #F08A5D;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border: 10px solid #F08A5D;
  border-radius: 10px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-size: 24px;
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
</style>