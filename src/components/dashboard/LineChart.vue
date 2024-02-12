<script setup>
import { ref, watch } from "vue";
import apexchart from "vue3-apexcharts";

const props = defineProps({
  data: Object,
  type: String,
});

const colorLine = ref("#fff");
const series = ref(getSeries());
const options = ref(getOption());

watch(
  () => props.data,
  (e) => {
    series.value = getSeries();
    options.value = getOption();
  },
  { deep: true }
);

function getSeries() {
  return [
    {
      name: "Jumlah",
      data: props.data?.jumlah,
      color: colorLine.value,
    },
  ];
}
function getOption() {
  return {
    chart: {
      fontFamily: "Poppins, sans-serif",

      foreColor: "#fff",
      toolbar: {
        show: false,
      },
      type: "line",
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 4,
      color: colorLine.value,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#ffffff40",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      show: false,
    },
    stroke: {
      show: true,
      curve: "monotoneCubic",
      lineCap: "butt",
      colors: [colorLine.value],
      width: 2,
      dashArray: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: props.data?.label,
      labels: {
        colors: "#fff",
        cssClass: "text-white",
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  };
}
</script>
<template>
  <div
    class="w-full h-[250px] pr-3 pl-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
  >
    <apexchart
      width="100%"
      height="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
