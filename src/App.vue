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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d7ae6;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #0c549c;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>
