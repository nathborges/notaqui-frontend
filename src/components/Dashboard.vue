<template>
  <section class="section-container">
    <div class="title-container">
      <h1>Todas as despesas</h1>
    </div>
    <div class="content-container">
      <CardDia :firstElement="true" />
      <CardDia />
      <CardDia />
      <CardDia />
      <CardDia />
    </div>
  </section>
</template>

<script>
import service from "../service";
import CardDia from "../components/CardDia.vue";

export default {
  name: "Dashboard",
  components: { CardDia },
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
.section-container {
  flex: 3;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 1%;
  margin-bottom: 1%;
  color: black;
  overflow: scroll;
  padding: 4%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.content-container {
  gap: 10px;
  display: flex;
  flex-direction: column;
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

</style>
