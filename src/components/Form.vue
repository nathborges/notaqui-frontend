<template>
  <section class="section-container">
    <div class="title-container">
      <h1>Criar nova despesa</h1>
    </div>
    <div class="content-container">
      <div v-if="filesAttached.length == 0" class="flex-1">
        <p>Não existem documentos associados a essa despesa.</p>
      </div>
      <div
        v-else
        class="align-top card-container flex-col flex gap-1 overflow-scroll justify-top"
      >
        <div
          v-for="(eachFile, index) in filesAttached"
          :key="index"
        >
          <CardArquivo :file="eachFile" />
        </div>
      </div>
      <div class="flex flex-col align-middle">
        <!-- <img src="src/assets/file-upload-icon.svg" />
        <input type="file" class="hidden" placeholder="Selecione ou arraste o cupom fiscal ou a nota fiscal" /> -->
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray:200">
                <span class="font-semibold">Clique para adicionar</span> ou
                arraste uma nota fiscal | recibo fiscal
              </p>
              <p class="text-xs text-gray:200">SVG, PNG, JPG or GIF</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              class="hidden"
              accept="images"
              @change="previewFiles"
              multiple
            />
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardArquivo from "./CardArquivo.vue";
export default {
  components: { CardArquivo },
  name: "Form",
  data() {
    return {
      filesAttached: [],
      loadingIndicator: true,
    };
  },
  methods: {
    async previewFiles(event) {
      const aa = Array.from(event.target.files) || [];
      aa.forEach(async (element) => {
        console.log(await this.getBase64(element));
        this.filesAttached.push(element);
      });
    },
    getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
    },
  },
  async mounted() {
    await this.getList();
  },
};
</script>

<style scoped>
.section-container {
  flex: 3;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 1%;
  margin-bottom: 1%;
  color: black;
  overflow: hidden;
  padding: 4%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-container {
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.section-container h1 {
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 35px;
  text-align: left;
}

h2 {
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 30px;
  text-align: left;
}

.file-uploader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 5%;
  border-radius: 20px;
  cursor: pointer;
}

.file-uploader-container img {
  width: 5%;
}

.card-container {
  height: 55%;
}

label {
  border: #d9d9d9 dashed 3px;
}
</style>
