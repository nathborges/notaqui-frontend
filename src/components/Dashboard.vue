<template>
  <section class="section-container">
    <div>
      <h1>Todas as despesas</h1>
    </div>
    <div
      @click="this.$router.push({ name: 'NovaDespesa' })"
      class="button-add-new flex justify-end"
    >
      <div class="flex gap-2 button">
        <img src="../assets/add-icon.svg" />
        <p>Adicionar despesa</p>
      </div>
    </div>
    <div v-if="!isLoading" class="content-container">
      <Bar height="100" :data="getChartData" :options="options" />
      <CardDia
        v-for="(despesa, i) in despesas"
        :objects="despesa"
        :dia="despesa[0].dataRegistro"
        :key="i"
      />
    </div>
    <div v-if="isLoading" class="content-container loading" role="status">
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
    </div>
  </section>
</template>

<script>
import service from "../service";
import CardDia from "../components/CardDia.vue";
import CardDiaVazio from "../components/CardDiaVazio.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "Dashboard",
  components: { CardDia, CardDiaVazio, Bar },
  data() {
    return {
      despesas: {},
      isLoading: true,
      options: {
        scales: {
          y: {
            display: false,
          },
        },
        responsive: true,
        backgroundColor: ["#d9d7eaba"],
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              label: function (tooltipItems) {
                return `R$ ${tooltipItems.formattedValue}`;
              },
            },
          },
        },
      },
    };
  },
  methods: {
    async getList() {
      this.isLoading = true;
      const response = await service.list();

      response.data.forEach((element) => {
        // const despesa = { [element.dataRegistro]: [] }.
        if (!this.despesas[element.dataRegistro]) {
          this.despesas[element.dataRegistro] = [];
        }
        this.despesas[element.dataRegistro].push(element);
      });
      this.isLoading = false;
    },
  },
  computed: {
    getChartData() {
      const keys = Object.keys(this.despesas);

      const data = keys.map((each) => {
        let sum = 0;
        this.despesas[each].forEach((eachKey) => {
          sum = sum + eachKey.valor;
        });
        return sum.toFixed(2);
      });
      return {
        labels: Object.keys(this.despesas),
        datasets: [{ barPercentage: 1, categoryPercentage: 1, data }],
      };
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
  overflow-y: scroll;
  padding: 4%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  scrollbar-color: light;
}

.content-container {
  gap: 10px;
  display: flex;
  flex-direction: column;
}

.graph {
  height: 10px;
}

.loading {
  height: 100%;
  align-items: center;
  justify-content: center;
}

.section-container h1 {
  font-family: "WorkSans";
  font-weight: 800;
  text-align: left;
}

h2 {
  font-family: "WorkSans";
  font-weight: 800;
  text-align: left;
}

.button {
  cursor: pointer;
  font-family: "WorkSans";
  font-weight: 500;
}
</style>
