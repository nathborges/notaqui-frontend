<template>
  <div class="flex flex-row shadow file-card-container rounded-lg w-full gap-6">
    <div class="flex align-center justify-center">
      <a :href="returnUrl" class="align-center" target="_blank">
        <img class="rounded-lg align-center" :src="returnUrl" />
      </a>
    </div>
    <div class="flex flex-col justify-evenly gap-3 flex-1">
      <div class="flex flex-col gap-2">
        <p class="title">Documento</p>
        <div class="flex gap-2 documento">
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
            type="number"
            :value="file.valor"
            step="0.01"
            :isEditable="edit"
            @updateValue="refreshValor"
          />
          <item
            class="flex-1"
            title="Data"
            type="date"
            :value="file.data"
            :isEditable="edit"
            @updateValue="refreshData"
          />
          <img
            v-show="!edit"
            class="edit-icon"
            @click="changeEdit"
            src="../assets/pencil-icon.svg"
          />
          <img
            v-show="edit"
            class="edit-icon"
            @click="updateFile"
            src="../assets/check-icon.svg"
          />
        </div>
      </div>
      <span class="vr"></span>
      <div class="flex flex-col gap-2">
        <p class="title">Estabelecimento</p>
        <div class="flex flex-col estabelecimento">
          <div class="flex gap-2 estabelecimento">
            <item class="flex-1" title="Nome" :value="file.razaoSocial" />
            <item class="flex-1" title="CNPJ" :value="file.cnpj" />
          </div>
          <item class="flex-1" title="Atividade" :value="file.tipoEmpresa" />
        </div>
      </div>
    </div>
  </div>
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
      edit: false,
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

.edit-icon {
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

  .edit-icon {
    height: 5vh;
    align-self: flex-end;
  }
}
</style>
