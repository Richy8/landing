<template>
  <div id="app">
    <!-- <Header />
    <About />
    <Login /> -->
    <router-view></router-view>
  
    <app-homepage></app-homepage>
    <app-about></app-about>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-login></app-login>
    <v-tour />
  </div>
</template>

<script>
import About from './components/About'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Contact from './components/Contact'

import Login from './components/Login.vue'
import VTour from './components/v-tour.vue'

export default {
  name: 'App',
  components: {
    // Header,
    // About,
    // Login
    
    'app-about': About,
    'app-homepage': Homepage,
    'app-footer': Footer,
    'app-contact': Contact,
    'app-login': Login,
    VTour
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
