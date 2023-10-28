<template>
  <div class="item" :style="isEditable ? '' : 'background: transparent'">
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
      maxlength="14" size="14"
    />
    <input
      v-if="isEditable && type == 'date'"
      :type="type"
      class="value flex-2"
      v-model="newValue"
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
      this.newValue = this.newValue.replace(/\D/g, '');;
    },
  }
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
</style>
