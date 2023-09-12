<template>
    <div class="day-container">
        <div class="flex flex-row border-b-4 justify-between">
          <h2>Hoje</h2>
          <div v-if="firstElement" @click="this.$router.push({ name: 'NovaDespesa'})" class="button-add-new">
            <img src="src/assets/add-icon.svg" />
          </div>
        </div>
        <div class="days">
          <div class="each-day-container">
            <div>
              <h3>Almoço médico</h3>
              <p>22:24 - 12/02/2013</p>
            </div>
            <h3>R$ 54,90</h3>
          </div>
          <div class="each-day-container">
            <div>
              <h3>Almoço médico</h3>
              <p>22:24 - 12/02/2013</p>
            </div>
            <h3>R$ 54,90</h3>
          </div>
          <div class="each-day-container">
            <div>
              <h3>Almoço médico</h3>
              <p>22:24 - 12/02/2013</p>
            </div>
            <h3>R$ 54,90</h3>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "CardDia",
  props: {
    firstElement: false,
  },
  methods: {
    async getList() {
      console.log(await service.list());
    },
  },
  async mounted() {
    await this.getList();
  },
};
</script>


<style scoped>

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

.each-day-container {
  display: flex;
  text-align: left;
  font-size: 1.5rem;
  flex: 1;
}

.each-day-container div {
  flex: 1;
}

.each-day-container > h3 {
  text-align: right;
}

.each-day-container h3 {
  flex: 1;
  font-weight: 700;
}

.button-add-new {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.button-add-new img {
    height: 3vh;
}

.days {
  display: flex;
  flex-direction: column;
  gap: 100%;
}
</style>