<template>
<nav-comp></nav-comp>
</template>
<script>
import navComp from './components/navComp.vue'
export default{
  components:{
    navComp
  }
}
</script>
<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc6e6;
  background-color: rgb(112, 18, 76);
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #0c549c;
  font-size:large;
}

nav a.router-link-exact-active {
  color: #000000;
}
.slide-in {
  animation: slideInFromTop 1s ease-in-out; /* Modify the animation duration and timing function as needed */
  visibility: visible;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
