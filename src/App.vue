<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './components/Home.vue'
</script>

<template>
  <span class="logo-wrapper">
    <img alt="Vue logo" src="./assets/vite-logo.svg" />
    <i class="pi pi-plus" style="font-size: 2rem" />
    <img alt="PrimeVue logo" src="./assets/primevue-logo.png" />
  </span>
  
  <Home msg="Welcome to PrimeVue!" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-wrapper {
  display: inline-flex;
  align-items: center;
}

.logo-wrapper img {
  width: 150px;
}
</style>
