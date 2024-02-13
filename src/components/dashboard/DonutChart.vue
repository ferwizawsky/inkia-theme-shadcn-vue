<script setup>
import apexchart from "vue3-apexcharts";
import { onMounted, ref, watch } from "vue";

const props = defineProps(["data"]);
const options = ref();
const series = ref([]);

onMounted(() => {
  options.value = getOption();
  series.value = props?.data?.series ?? [];
});
watch(
  () => props.data,
  (e) => {
    series.value = e?.series ?? [];
    options.value = getOption();
  }
);

function getOption() {
  return {
    stroke: {
      show: false,
      width: 0,
    },
    chart: {
      id: "donutChart",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.1,
        inverseColors: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: props?.data?.colors,
    labels: props?.data?.labels,
  };
}
</script>
<template>
  <div class="p-4 border rounded-xl shadow-md">
    <apexchart type="donut" :options="options" :series="series" />
    <div class="text-sm pt-6">
      <div v-for="(item, index) in data?.series" class="flex justify-between">
        <div class="flex-none flex items-center">
          <div
            class="w-2 h-2 rounded-full mr-2"
            v-if="props?.data?.colors[index]"
            :style="{ backgroundColor: props?.data?.colors[index] }"
          ></div>
          {{ props?.data?.labels[index] }}
        </div>
        <div class="font-semibold">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
