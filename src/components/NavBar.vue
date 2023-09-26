<template>
  <div class="navbar-main-container">
    <div class="nav-bar-user">
      <img src="../assets/user.webp" />
      <p>Olá, Nathália</p>
    </div>
    <div class="nav-bar-items">
      <div class="each-item" @click="this.$router.push({ name: 'Dashboard' })">
        <img class="nav-bar-image-item" src="../assets/despesas-icon.svg" />
        <p class="nav-bar-image-text">Despesas</p>
      </div>
      <div class="each-item" @click="console.log('load')">
        <img class="nav-bar-image-item" src="../assets/sign-out.svg" />
        <p class="nav-bar-image-text">Sair</p>
      </div>
    </div>
    <div class="nav-bar-logo">
      <img src="../assets/logo.png" />
    </div>
  </div>
</template>

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
  font-size: 16px;
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
  font-size: 1.1rem;
  font-weight: 600;
  flex: 1;
}

.nav-bar-logo img {
  height: 60%;
  flex: 0.5;
}
</style>
