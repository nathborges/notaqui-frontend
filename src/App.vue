<template>
  <notifications />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@font-face {
  font-family: "WorkSans";
  src: url("./assets/fonts/worksans.ttf") format("truetype");
}

body {
  height: 100vh;
  width: 100vw;
}

#app {
  margin: 0 !important;
  padding: 0 !important;
}

p {
  font-family: WorkSans;
  font-size: clamp(0.9rem, 0.5vw, 0.3vh);
}

h1 {
  font-family: WorkSans;
  font-size: clamp(1.6rem, 2vw, 2vh);
}

h2 {
  font-family: WorkSans;
}

.vue-notification {
  background: black !important;
  font-family: WorkSans !important;
  padding: 20px !important;
  font-size: clamp(1rem, 0.5vw, 0.3vh) !important;
  border-left: none !important;
}
</style>
