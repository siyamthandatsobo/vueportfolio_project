<template>
   <div v-if="Headings && Headings.length > 0">
      <h2 class="display-2 mt-4 slide-in">{{ Headings[3].Heading }}</h2>
      <h3>{{ Headings[3].description }}</h3>
    </div>
    <div v-else>
      
      <p>No headings available.</p>
    </div>
    <div class="container">

        <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4">
            
            <div class="col" v-for="review in Reviews" :key="review.id" >
                <div class="card">
                    <img :src="review.url" width="325px" height="310px">
                    <div class="card__content">
                        <p class="card__title">{{ review.person }}</p>
                        <p class="card__description">{{ review.review }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    methods: {
      fetchData() {
        this.$store.dispatch('getReviews');
        this.$store.dispatch('getContentHeadings'); // Dispatch the 'fetchdata' action
      }
    },
    mounted() {
      this.fetchData(); // Call the method to fetch data when the component is mounted
    },
    computed: {
      Reviews() {
        return this.$store.state.reviews || []
      },
      Headings(){
        return this.$store.state.contentHeadings || [] // Access 'resume' state from Vuex

      }
    }
  }

</script>

<style scoped>
.card {
  position: relative;
  width: 250px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #27222200;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card svg {
  width: 48px;
  fill: #ffffff;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover svg {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #0f0d0d;
  line-height: 1.4;
}

</style>