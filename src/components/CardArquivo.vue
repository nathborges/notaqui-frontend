<template>
  <div class="flex flex-row shadow file-card-container rounded-lg w-full gap-6">
    <img
      class="icon delete"
      @click="deleteItem"
      src="../assets/delete-icon.svg"
    />
    <div class="flex align-center justify-center">
      <a :href="returnUrl" class="align-center" target="_blank">
        <img class="rounded-lg align-center" :src="returnUrl" />
      </a>
    </div>
    <div class="flex flex-col justify-evenly gap-3 flex-1">
      <div class="flex flex-col gap-2">
        <p class="title">Documento</p>
        <div class="flex flex-row gap-2">
          <div class="flex flex-1 gap-2 documento">
            <item
              class="flex-1"
              title="Título"
              type="text"
              :value="file.titulo"
              :isEditable="edit"
              @updateValue="refreshTitulo"
            />
            <item
              class="flex-1"
              title="Valor"
              type="price"
              :value="file.valor"
              :isEditable="edit"
              @updateValue="refreshValor"
            />
            <item
              class="flex-1"
              title="Data"
              type="date"
              :value="converterData(file.data)"
              :isEditable="edit"
              @updateValue="refreshData"
            />
          </div>
          <div class="flex flex-row justify-evenly">
            <img
              v-show="!edit"
              class="icon"
              @click="changeEdit"
              src="../assets/pencil-icon.svg"
            />
            <img
              v-show="edit"
              class="icon"
              @click="disableEdit"
              src="../assets/check-icon.svg"
            />
          </div>
        </div>
      </div>
      <span class="vr"></span>
      <div class="flex flex-col gap-2">
        <p class="title">Estabelecimento</p>
        <div class="flex flex-col gap-3 estabelecimento">
          <div class="flex gap-2">
            <item
              class="flex-1"
              title="CNPJ"
              type="number"
              :isEditable="file.cnpjInvalido"
              :value="formatarCNPJ(file.cnpj)"
              @updateValue="refreshCnpj"
            />
            <img
              v-show="file.cnpjInvalido"
              class="icon self-center"
              @click="loadCnpj"
              src="../assets/check-icon.svg"
            />
            <div class="ghost-div flex-1" />
          </div>
          <div class="flex gap-2 estabelecimento">
            <item class="flex-1" title="Nome" :value="file.razaoSocial" />

            <item
              class="flex-1"
              title="Categoria"
              :value="formatarPascalCase(file.categoria)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-show="file.cnpjInvalido" class="error">
    Não conseguimos identificar os dados da despesa. Verifique a legibilidade do
    documento enviado ou insira o CNPJ manualmente.
  </p>
</template>

<script>
import Item from "./Item.vue";
import moment from "moment";

export default {
  components: { Item },
  name: "CardArquivo",
  props: {
    file: null,
  },
  data() {
    return {
      edit: false || this.file.cnpjInvalido,
      value: "",
      title: "",
    };
  },
  computed: {
    returnUrl() {
      if (this.file.raw.type == "application/pdf") {
        return "https://cdn-icons-png.flaticon.com/512/4208/4208479.png";
      }
      return URL.createObjectURL(this.file.raw);
    },
  },
  methods: {
    changeEdit() {
      this.edit = !this.edit;
    },
    disableEdit() {
      if (this.file.valor) {
        const valor = this.file.valor;
        this.file.valor = parseFloat(valor).toFixed(2);
      }
      if (!this.file.titulo) {
        this.$notify({
          title: "O título da sua despesa não pode ser vazio.",
          duration: 2500,
        });
        return;
      }
      this.edit = !this.edit;
    },
    updateFile() {
      this.edit = !this.edit;
    },
    refreshValor(newValue) {
      this.file.valor = newValue;
    },
    refreshTitulo(newValue) {
      this.file.titulo = newValue;
    },
    refreshData(newValue) {
      this.file.data = moment(newValue).format("DD/MM/YYYY");
    },
    refreshCnpj(newValue) {
      this.file.cnpj = newValue;
    },
    refreshFile(newValue) {
      this.file = newValue;
    },
    formatarCNPJ(cnpj) {
      cnpj = cnpj.replace(/\D/g, "");

      cnpj = cnpj.replace(/(\d{2})(\d)/, "$1.$2");
      cnpj = cnpj.replace(/(\d{3})(\d)/, "$1.$2");
      cnpj = cnpj.replace(/(\d{3})(\d{1,2})$/, "$1/$2");

      cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2");

      return cnpj;
    },
    formatarPascalCase(inputString) {
      if (!inputString) {
        return "";
      }
      return inputString
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    },
    converterData(data) {
      return moment(data, "DD/MM/YYYY").format("YYYY-MM-DD");
    },
    deleteItem() {
      this.$emit("deleteItem");
    },
    loadCnpj() {
      this.$emit("loadCnpj");
    },
  },
  watch: {
    edit() {
      this.$emit("editingChange", this.edit);
    },
  },
};
</script>

<style scoped>
.file-card-container {
  background-color: #d9d7eaba;
  padding: 2vw 2vh;
  justify-content: space-around;
}
.file-card-container:hover {
  background-color: #bebae3ba;
}

a {
  align-self: center;
}

img {
  object-fit: cover;
  align-self: center;
  justify-self: center;
  max-height: 150px;
  height: 150px;
  width: 150px;
}

.icon {
  height: 2.5vh;
  width: auto;
  align-self: center;
  cursor: pointer;
}

.title {
  font-style: normal;
  font-weight: 600;
  text-align: start;
  color: #2c2c2c;
}

.vr {
  height: 1px;
  border-bottom: 2px solid #b5b5b5;
  border-radius: 10px;
}

a {
  height: fit-content;
}

.delete {
  align-self: flex-start;
  margin-top: -1.3%;
}

.error {
  font-size: 13px;
  color: #cc0000;
  margin: 1vh;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 0.5s;
}

@media (max-width: 600px) {
  .estabelecimento {
    flex-direction: column;
  }

  .documento {
    flex-direction: column;
  }

  .file-card-container {
    flex-direction: column;
  }

  .icon {
    height: 5vh;
    align-self: flex-end;
  }

  .ghost-div {
    display: none;
  }
}
</style>
