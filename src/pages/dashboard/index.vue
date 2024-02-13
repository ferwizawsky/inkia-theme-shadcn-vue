<script setup lang="ts">
import { defineAsyncComponent, ref, Ref } from "vue";
import {
  DataArea,
  DataLine,
  DataDonut,
  objectDataDonut,
  objectDataArea,
  objectDataline,
} from "@/composables/data/dashboard";

const LineChart = defineAsyncComponent(
  () => import("@/components/dashboard/LineChart.vue")
);
const BarChart = defineAsyncComponent(
  () => import("@/components/dashboard/BarChart.vue")
);
const AreaChart = defineAsyncComponent(
  () => import("@/components/dashboard/AreaChart.vue")
);
const DonutChart = defineAsyncComponent(
  () => import("@/components/dashboard/DonutChart.vue")
);

// Define data
const dataLine: Ref<DataLine> = ref(objectDataline);
const dataArea: Ref<DataArea> = ref(objectDataArea);
const dataDonut: Ref<DataDonut> = ref(objectDataDonut);
</script>

<template>
  <div>
    <div class="text-center text-xl font-semibold">Collection Chart</div>
    <div class="grid lg:grid-cols-4 gap-4 my-4">
      <LineChart :data="dataLine" class="lg:col-span-2" />
      <BarChart class="lg:col-span-2" />
      <AreaChart :data="dataArea" class="lg:col-span-3" />
      <DonutChart :data="dataDonut" />
    </div>
  </div>
</template>
