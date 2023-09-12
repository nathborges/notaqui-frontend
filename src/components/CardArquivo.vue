<template>
  <div class="flex p-4 flex-row file-card-container rounded-lg w-full h-36 gap-4">
    <div class="flex align-center justify-center">
      <img class="rounded-lg" :src="returnUrl(file)" />
    </div>
    <div class="flex-1 flex flex-col file-card-container w-full">
      <p><strong> Nome da despesa:</strong> Teste 1</p>
      <p><strong>CNPJ:</strong> Teste 1</p>
      <p><strong>Nome do arquivo: </strong> {{ file.name }}</p>
      <p><strong>Data da despesa: </strong> 11/09/2000 </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'; 
export default {
  name: "CardArquivo",
  props: {
    file: null,
  },
  methods: {
    returnUrl(file) {
      return URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
.file-card-container {
  background-color: #d9d9d9;
  align-items: flex-start;
}

img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    align-self: center;
    justify-self: center;
}
</style>
