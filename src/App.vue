<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #000;
  color: #fff;
  font-family: 'Arial', sans-serif;
  height: 100%;
}

#app {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin-top: 60px; /* Space for the fixed navbar */
}
</style>