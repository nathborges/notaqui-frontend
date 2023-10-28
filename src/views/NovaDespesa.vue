<script setup>
import NavBar from "../components/NavBar.vue";
import Form from "../components/Form.vue";

components: {
  NavBar, Form;
}
</script>

<template>
  <main>
    <nav-bar class="nav-bar-container" />
    <Form />
  </main>
</template>

<script>
export default {
  name: "NovaDespesa",
  data() {
    return {
      loadingIndicator: true,
    };
  },
  mounted() {
    const userIsLogged = localStorage.getItem("userAuthorized");
    if (userIsLogged == "false") {
      window.location = "/";
    }
  },
};
</script>

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

.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blur {
  filter: blur(2px);
}

@media (max-width: 700px) and (orientation : portrait){
  main {
    flex-direction: column;
  }
}


@media (max-height: 700px) and (orientation : landscape){
  main {
    flex-direction: column;
  }
}
</style>
