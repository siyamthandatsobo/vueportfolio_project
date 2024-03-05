<template>
<nav-comp></nav-comp>
<footer-comp></footer-comp>

</template>
<script>
import navComp from './components/navComp.vue'
import footerComp from './components/footerComp.vue'

export default{
  components:{
    navComp,
    footerComp,
    
  }
}
</script>
<style>
#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffc6e6;
  background-color: rgb(112, 18, 76);
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
  color: #004369;
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
