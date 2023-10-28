<template>
  <div class="navbar-main-container">
    <div class="nav-bar-user">
      <img src="../assets/user.jpg" />
      <p>Olá, Sanofi</p>
    </div>
    <div class="nav-bar-items">
      <div class="each-item" @click="this.$router.push({ name: 'Dashboard' })">
        <img class="nav-bar-image-item" src="../assets/despesas-icon.svg" />
        <p>Despesas</p>
      </div>
      <div class="each-item" @click="logout">
        <img class="nav-bar-image-item" src="../assets/sign-out.svg" />
        <p>Sair</p>
      </div>
    </div>
    <div class="nav-bar-logo">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.setItem("userAuthorized", false);
      window.location = "/";
    },
  },
};
</script>

<style scoped>
.navbar-main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  align-content: center;
  flex-wrap: nowrap;
  gap: 3%;
  padding-top: 3%;
}

.nav-bar-user {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 0.5;
  align-items: center;
  justify-content: center;
}

.nav-bar-user img {
  border-radius: 50%;
  width: 30%;
}

.nav-bar-user p {
  font-weight: 600;
}
a {
  width: 100%;
  text-decoration: none;
}

.nav-bar-items {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex: 2;
  flex-direction: column;
  gap: 5px;
}

.each-item {
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #2c114e;
  width: 100%;
  height: 9vh;
  cursor: pointer;
}

.each-item img {
  height: 20%;
  flex: 1;
}

.each-item p {
  text-align: left;
  font-weight: 600;
  flex: 1;
}

.nav-bar-logo img {
  height: 60%;
  flex: 0.5;
}

@media (max-width: 700px) and (orientation: portrait) {
  .nav-bar-user {
    padding: 2vh;
    display: none;
  }

  .each-item {
    height: 5vh;
  }

  .nav-bar-user img {
    display: none;
  }
  .nav-bar-logo {
    display: none;
  }

  .each-item p {
    display: none;
  }

  .nav-bar-items {
    flex-direction: row;
  }

  .nav-bar-container{
    flex: none;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .nav-bar-user {
    padding: 2vw;
  }

  .nav-bar-user img {
    display: none;
  }
  .nav-bar-logo {
    display: none;
  }

  .each-item p {
    display: none;
  }

  .nav-bar-items {
    flex-direction: row;
  }

  p {
    font-size: 20px;
  }

  .each-item {
    height: 10vh;
  }
}
</style>
