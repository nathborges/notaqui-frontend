<template>
  <div class="flex main-container flex-row">
    <div
      class="inputs-container flex-1 flex bg-white items-center content-center sm:flex-col"
    >
      <img class="login-logo" src="../assets/logo-preta.png" />
      <div class="flex items-center login-input-container flex-col">
        <div class="w-full"><p>E-mail</p></div>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          class="shadow appearance-none border rounded w-full"
          v-model="email"
        />
      </div>
      <div class="flex items-center login-input-container flex-col">
        <div class="w-full"><p class="font-WorkSans">Senha</p></div>
        <input type="password" placeholder="••••••••••" v-model="password" />
      </div>
      <div class="flex items-center login-input-container">
        <div
          @click="actionLogin"
          class="border rounded login-button w-full cursor-pointer"
        >
          <a><p>Login</p></a>
        </div>
      </div>
    </div>
    <div class="banner-container center flex-1 flex-col">
      <h2>
        Sua ferramenta inteligente para <br />
        o cadastro de despesas.
      </h2>

      <img src="../assets/banner.svg" />
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    returnUrl() {
      return URL.createObjectURL(this.file.raw);
    },
  },
  methods: {
    changeEdit() {
      this.edit = !this.edit;
    },
    updateFile() {
      this.edit = !this.edit;
    },
    refreshValor(newValue) {
      this.file.value = newValue;
    },
    refreshTitulo(newValue) {
      this.file.title = newValue;
    },
    refreshData(newValue) {
      this.file.data = moment(newValue).format('DD/MM/YYYY');
    },
    actionLogin(){
      console.log(this.email, this.password);
      if (this.email == 'sanofi@teste.com' && this.password == 'sanofi' ) {
        this.$router.push(
           '/dashboard'
        );
      }
    }
  },
};
</script>

<style scoped>
.main-container {
  width: 100vw;
  height: 100%;
}

.main-container p {
  color: black;
}

.main-container input {
  background-color: #e4e4e4;
  height: 59px;
  width: 380px;
  color: black;
  text-align: center;
}

.inputs-container {
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-right: 5%;
  padding-left: 5%;
}

.login-logo {
  width: 60%;
}

.login-container {
  flex: 1;
  background-color: white;
  height: 100%;
}

.banner-container {
  flex: 2;
  background-color: #190433;
  height: 100%;
  align-items: center;
  justify-items: center;
  display: flex;
  justify-content: space-around;
  text-align: left;
}

.login-input-container {
  justify-content: center;
  align-content: center;
  display: flex;
}

.login-input-container p {
  text-align: start;
}

.login-button {
  background-color: #190433;
  border-radius: 15px;
  height: 59px;
  width: 380px;
  pointer-events: fill;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.12));
  background: #1e0242;
  border-radius: 9px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-button p {
  color: white;
  text-align: center !important;
}

p {
  font-family: WorkSans;
  font-weight: 600;
  font-size: 16px;
}

h2 {
  font-family: WorkSans;
  font-weight: 600;
  font-size: 22px;
  color: white;
}

input {
  font-family: WorkSans;
  font-size: 16px;
  text-align: right;
  background: rgba(228, 228, 228, 0.58);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
}
</style>
