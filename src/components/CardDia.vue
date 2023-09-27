<template>
  <div class="day-container">
    <div class="flex flex-row justify-between">
      <h2>{{ getDay }}</h2>
    </div>
    <div class="days">
      <div class="each-day-container" v-for="(object, i) in objects" :key="i">
        <div>
          <h3>{{ object.titulo }}</h3>
          <div>
            <p>
              <strong>CNPJ:</strong>
              {{
                object.infoPj.cnpj.replace(
                  /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                  "$1.$2.$3/$4-$5"
                )
              }}
            </p>
            <p>
              <strong>Razão Social:</strong> {{ object.infoPj.razaoSocial }}
            </p>
          </div>
        </div>
        <h3>
          {{
            object.valor.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CardDia",
  props: {
    objects: {},
    dia: "",
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    getDay() {
      const date = moment(this.dia, "DD/MM/YYYY");

      if (moment().toDate() == date) {
        return "Hoje";
      }

      const diasDaSemana = [
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
        "Domingo",
      ];
      const dayOfWeek = date.isoWeekday() - 1;
      return `${diasDaSemana[dayOfWeek]}, ${this.dia}`;
    },
  },
};
</script>

<style scoped>
.section-container h1 {
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 3px;
  text-align: left;
}
h2 {
  font-family: "WorkSans";
  font-weight: 800;
  font-size: 20px;
  text-align: left;
}

.each-day-container {
  display: flex;
  text-align: left;
  font-size: 16px;
  flex: 1;
  background-color: #d9d7eaba;
  border-radius: 10px;
  padding: 1vh 1.5vh;
}

.each-day-container div {
  flex: 1;
}

.each-day-container > h3 {
  text-align: right;
}

.each-day-container h3 {
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
  gap: 2vh;
}
</style>
