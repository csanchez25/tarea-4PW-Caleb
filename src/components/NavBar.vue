<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/distance">Distance Converter</router-link></li>
      <li><router-link to="/temperature">Temperature Converter</router-link></li>
      <li><router-link to="/weight">Weight Converter</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style>
.navbar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.navbar li {
  float: left;
}

.navbar li a {
  display: block;
  color: #0f0;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

.navbar li a:hover {
  background-color: #0b0;
  color: #000;
}
</style>