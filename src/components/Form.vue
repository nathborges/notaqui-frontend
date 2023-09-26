<template>
  <section class="section-container">
    <div class="flex-1 title-container">
      <h1>Criar nova despesa</h1>
    </div>
    <div class="flex-1 content-container">
      <div
        v-if="filesAttached.length == 0"
        :style="loadingIndicator ? 'filter: blur(2px)' : ''"
        class="flex-1 flex justify-center items-center card-container"
      >
        <p>
          Ainda não existem notas fiscais ou cupons fiscais associados a essa
          despesa.
        </p>
      </div>
      <div
        v-else
        class="align-top card-container flex-col flex gap-4 overflow-y-auto justify-top"
      >
        <div v-for="(eachFile, index) in filesAttached" :key="index">
          <CardArquivo :file="eachFile" />
        </div>
      </div>
      <div class="flex flex-col" style="gap: 3vh">
        <div
          class="flex flex-col align-middle"
          :style="loadingIndicator ? 'filter: blur(2px)' : ''"
        >
          <div class="flex items-center attachment justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-26 rounded-lg cursor-pointer hover:bg-gray-100"
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
                <p class="mb-2 text-gray:200">
                  Clique para adicionar ou arraste uma
                  <span class="font-semibold">nota fiscal</span> ou um
                  <span class="font-semibold">cupom fiscal</span>
                </p>
                <p class="sm text-gray:200">PNG, JPG ou JPEG</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                accept="image/png, image/jpeg"
                @change="previewFiles"
                multiple
              />
            </label>
          </div>
        </div>
        <div class="flex w-full align-center justify-end items-center gap-5">
          <div v-show="loadingIndicator" role="status">
            <svg
              aria-hidden="true"
              class="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-900"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Carregando arquivo...</span>
          </div>
          <div
            class="border rounded criar-button cursor-pointer"
            @click="submit"
          >
            <a><p>Criar</p></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import service from "../service";
import CardArquivo from "./CardArquivo.vue";
export default {
  components: { CardArquivo },
  name: "Form",
  data() {
    return {
      filesAttached: [],
      loadingIndicator: false,
    };
  },
  methods: {
    async previewFiles(event) {
      const files = Array.from(event.target.files) || [];
      files.forEach(async (element) => {
        this.loadingIndicator = true;

        const elementInformation = await this.getData(element);

        if (elementInformation) {
          this.filesAttached.push(elementInformation);
        }
        this.loadingIndicator = false;
      });
    },
    async getData(file) {
      try {
        const fileInformation = await service.getFileInformation(file);
        return { ...fileInformation, name: file.name, raw: file };
      } catch (error) {
        return null;
      }
    },
    async submit() {
      this.filesAttached.forEach(async (file) => {
        this.loadingIndicator = true;
        await service.sendFile(file);
        this.loadingIndicator = false;
        this.$router.push("/dashboard");
      });
    },
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
  gap: 2vh;
  scrollbar-color: light;
  overflow: scroll;
}

.content-container {
  gap: 3vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.section-container h1 {
  font-family: "WorkSans";
  font-weight: 800;
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
  min-height: 55vh;
  height: 55vh;
  max-height: 55vh;
  scrollbar-color: light;
  scrollbar-width: thin;
}

label {
  border: #d9d9d9 dashed 3px;
}

.criar-button {
  background-color: #190433;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 20vw;
  pointer-events: fill;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.12));
  background: #1e0242;
  border-radius: 9px;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  align-self: flex-end;
}

@media (max-width: 700px) {

  .section-container {
    width: 100vw;
  }
}
</style>
