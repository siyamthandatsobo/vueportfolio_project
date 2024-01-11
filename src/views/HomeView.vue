<template>
  
      <div class="container ">
        <div class="row vh-100 justify-content-center align-items-center">
          <!-- <div class="col-3">
            <div class="align-items-start">
              <img
                class="img-fluid"
                src="https://i.postimg.cc/qR4SywB3/SIYAMTHANDA-TSOBO-1-removebg-preview.png"
                alt="logo"
              />
            </div>
          </div> -->
          <div class="col">
            <h1 class="display-5 text-white">Siyamthanda Tsobo</h1>
            <p class="lead h4 text-light">
              Aspiring full-stack developer that would like to specialise in
              back-end.
            </p>
            </div>
            <div class="col">
              <div class="align-items-start">
                <img
                  class="img-fluid" id="siya"
                  src="https://i.postimg.cc/vZVnH34N/Tsobo-removebg-preview.png"
                  alt="logo"
                />
              </div>
          </div>
        </div>
        </div>
      


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
<style scoped>
.container {
  width: 100%;
  height: 100%;
  --color: #a748f5;
  background: linear-gradient(95deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(-15deg, var(--color) 25%, transparent 25%) -50px 0,
        linear-gradient(25deg, transparent 75%, var(--color) 75%) -50px 0,
        linear-gradient(-45deg, transparent 75%, var(--color) 75%) -50px 0,
        linear-gradient(-15deg, transparent 75%, var(--color) 75%) -50px 0;
  background-color: #b669fd;
  background-size: 40px 40px;
}
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600");
h1 {
  color: white;
  font-family: "Playfair Display", Vidaloka, serif;
  font-size: 8rem;

  line-height: 0.85;
  perspective: 500px;
}
@media (max-width: 768px) {
  h1 {
    font-size: 3rem; /* Adjust the font size for smaller screens */
  }
}
</style>
