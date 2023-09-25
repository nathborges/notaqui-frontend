<template>
    <div class="day-container">
        <div class="flex flex-row border-b-4 justify-between">
          <h2></h2>
          <div @click="this.$router.push({ name: 'NovaDespesa'})" class="button-add-new">
            <img src="../assets/add-icon.svg" />
          </div>
        </div>
        <div class="days">
          <div class="each-day-container">
            <div>
              <h3> </h3>
              <p>Não há registros</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "CardDiaVazio"
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