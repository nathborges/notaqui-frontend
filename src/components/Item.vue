<template>
  <div
    :class="{ shake: isInvalid }"
    class="item"
    :style="isEditable ? '' : 'background: transparent'"
  >
    <p class="title">
      {{ title }}
    </p>
    <span class="vr" :style="isEditable ? '' : 'border-color: #B5B5B5'"></span>
    <p v-if="type == 'price'" class="value flex-2">R$</p>
    <p v-if="!isEditable" class="value flex-2">{{ value }}</p>
    <input
      v-if="isEditable && type == 'price'"
      class="value flex-2"
      v-model="newValue"
      inputmode="numeric"
      @input="validarNumero"
    />
    <input
      v-if="isEditable && type == 'number'"
      class="value flex-2"
      v-model="newValue"
      inputmode="numeric"
      @input="validarCnpj"
      maxlength="14"
      size="14"
    />
    <input
      v-if="isEditable && type == 'date'"
      :type="type"
      class="value flex-2"
      v-model="newValue"
      @input="validarData"
      min="2000-01-01"
      max="2999-12-32"
    />

    <input
      v-if="isEditable && type == 'text'"
      :type="type"
      class="value flex-2"
      v-model="newValue"
    />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Item",
  props: {
    title: "",
    value: "",
    isEditable: false,
    type: "text",
  },
  data() {
    return {
      newValue: this.value,
      isInvalid: false,
    };
  },
  watch: {
    newValue(test) {
      this.$emit("updateValue", test);
    },
  },
  methods: {
    validarNumero() {
      if (!this.newValue || this.value < 0) {
        return;
      }
      this.newValue = this.newValue.replace(/[^0-9.]/g, "");
    },
    validarCnpj() {
      if (!this.newValue || this.value < 0) {
        return;
      }
      this.newValue = this.newValue.replace(/\D/g, "");
    },
    validarData() {
      if (!this.newValue || this.value < 0) {
        return;
      }

      const dataParaVerificar = moment(this.newValue);
      const limiteMinimo = moment("2010-01-01", "YYYY-MM-DD");

      const dataAtual = moment();

      if (dataParaVerificar.isAfter(dataAtual)) {
        this.newValue = dataAtual;
        this.$notify({
          title: "Data inválida",
          text: "Não é possível cadastrar uma despesa em uma data futura",
          duration: 2500,
        });
      }
    },
  },
};
</script>

<style scoped>
.item {
  padding-top: 0.5%;
  padding-bottom: 0.5%;

  padding-right: 1%;
  padding-left: 1%;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 3%;
}

.title {
  font-weight: 400;
  color: #252525;
}

.vr {
  width: 3px;
  height: 90%;
  border-right: 2px solid #eaeaea;
  border-radius: 10px;
}

.value {
  font-weight: 600;
  text-align: left;
}

input {
  background-color: transparent;
  font-family: "WorkSans";
  border-bottom: none;
}

input:focus {
  border: 0;
  box-shadow: 0;
  outline-offset: 0px;
  outline: none;
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
</style>
