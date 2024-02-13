<script setup>
import { ref, watch } from "vue";
import apexchart from "vue3-apexcharts";

const props = defineProps({
  data: Object,
  type: String,
});

const colorLine = ref("#FFCA57");
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
      name: "Value",
      data: props.data?.data,
      color: colorLine.value,
    },
  ];
}
function getOption() {
  return {
    chart: {
      toolbar: {
        show: false,
      },
      type: "line",
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 0,
      color: colorLine.value,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    fill: {
      colors: colorLine.value,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: [colorLine.value],
      width: 4,
      dashArray: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "dd MMM",
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
  <div class="w-full h-[350px] pr-3 pl-1 py-3 rounded-xl shadow-md border">
    <apexchart
      width="100%"
      height="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
