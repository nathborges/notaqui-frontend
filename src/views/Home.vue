<script setup>
import NavBar from "../components/NavBar.vue";
import Dashboard from "../components/Dashboard.vue";

components: {
  NavBar, Dashboard;
}
</script>

<template>
  <main>
    <nav-bar class="nav-bar-container" />
    <dashboard />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.nav-bar-container {
  flex: 0.5;
}

.section-container {
  flex: 3;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 0 0 10px;
  margin-top: 1%;
  margin-bottom: 1%;
}

@media (max-width: 700px) {
  main {
    flex-direction: column;
  }
}
</style>
