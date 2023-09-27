<script setup>
import { onMounted, ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import login from "../assets/login.json";

let anim = ref();

onMounted(() => {
  setTimeout(() => {
    console.log(anim.value.goToAndPlay(150, true));
    anim.value;
  }, 10000);
});
</script>

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

      <LottieAnimation
        ref="anim"
        :animation-data="login"
        :loop="true"
        :auto-play="true"
        :speed="0.1"
        class="gif"
      />
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
      this.file.data = moment(newValue).format("DD/MM/YYYY");
    },
    actionLogin() {
      if (this.email == "sanofi@teste.com" && this.password == "sanofi") {
        localStorage.setItem("userAuthorized", "true");
        this.$router.push("/dashboard");
      }
    },
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
  width: 30vw;
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
  width: 15vw;
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
  text-align: left;
  justify-content: center;
  gap: 5vh;
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
  width: 20vw;
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
  font-size: 25px;
  color: white;
  margin: 0 3vw 0 3vw;
}

input {
  font-family: WorkSans;
  font-size: 16px;
  text-align: right;
  background: rgba(228, 228, 228, 0.58);
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.12);
  border-radius: 9px;
}

.gif {
  max-height: 45vh;
  min-height: 10vh;
}

@media (max-width: 700px) {
  .main-container {
    flex-direction: column;
  }

  .inputs-container {
    padding-top: 5vh;
    padding-bottom: 5vh;
    padding-right: 5vw;
    padding-left: 5vw;
  }

  .login-button {
    width: 50vw;
  }

  .main-container input {
    width: 90vw;
  }

  .banner-container {
    gap: 1vh;
    padding-bottom: 2vh;
  }
  .banner-container h2 {
    gap: 1vh;
    padding: 5vh;
  }
  .login-logo {
    width: 50vw;
  }
}
</style>
