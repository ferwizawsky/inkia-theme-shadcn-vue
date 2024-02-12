<script setup lang="ts">
import { defineAsyncComponent, ref, Ref } from "vue";

// Define types
interface DataLine {
  tanggal: string;
  label: string[];
  jumlah: number[];
}

// Define components
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
const dataLine: Ref<DataLine> = ref({
  tanggal: "Jan - Des 2024",
  label: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  jumlah: [21122, 3398, 2140, 2210, 4410, 21420, 0, 1100, 10000, 2300, 1440, 0],
});

const dataArea: Ref<any> = ref({
  tanggal: "01 - 29 Feb 2024",
  label: [
    "02/01/2024 GMT",
    "02/02/2024 GMT",
    "02/03/2024 GMT",
    "02/04/2024 GMT",
    "02/05/2024 GMT",
    "02/06/2024 GMT",
    "02/07/2024 GMT",
    "02/08/2024 GMT",
    "02/09/2024 GMT",
    "02/10/2024 GMT",
    "02/11/2024 GMT",
    "02/12/2024 GMT",
    "02/13/2024 GMT",
    "02/14/2024 GMT",
    "02/15/2024 GMT",
    "02/16/2024 GMT",
    "02/17/2024 GMT",
    "02/18/2024 GMT",
    "02/19/2024 GMT",
    "02/20/2024 GMT",
    "02/21/2024 GMT",
    "02/22/2024 GMT",
    "02/23/2024 GMT",
    "02/24/2024 GMT",
    "02/25/2024 GMT",
    "02/26/2024 GMT",
    "02/27/2024 GMT",
    "02/28/2024 GMT",
    "02/29/2024 GMT",
  ],
  jumlah: [],
  data: [
    {
      x: "02/01/2024 GMT",
      y: 477,
    },
    {
      x: "02/02/2024 GMT",
      y: 1223,
    },
    {
      x: "02/03/2024 GMT",
      y: 762,
    },
    {
      x: "02/04/2024 GMT",
      y: 460,
    },
    {
      x: "02/05/2024 GMT",
      y: 803,
    },
    {
      x: "02/06/2024 GMT",
      y: 596,
    },
    {
      x: "02/07/2024 GMT",
      y: 459,
    },
    {
      x: "02/08/2024 GMT",
      y: 977,
    },
    {
      x: "02/09/2024 GMT",
      y: 0,
    },
    {
      x: "02/10/2024 GMT",
      y: 64,
    },
    {
      x: "02/11/2024 GMT",
      y: 84,
    },
    {
      x: "02/12/2024 GMT",
      y: 216,
    },
    {
      x: "02/13/2024 GMT",
      y: 0,
    },
    {
      x: "02/14/2024 GMT",
      y: 0,
    },
    {
      x: "02/15/2024 GMT",
      y: 0,
    },
    {
      x: "02/16/2024 GMT",
      y: 0,
    },
    {
      x: "02/17/2024 GMT",
      y: 0,
    },
    {
      x: "02/18/2024 GMT",
      y: 0,
    },
    {
      x: "02/19/2024 GMT",
      y: 0,
    },
    {
      x: "02/20/2024 GMT",
      y: 0,
    },
    {
      x: "02/21/2024 GMT",
      y: 0,
    },
    {
      x: "02/22/2024 GMT",
      y: 0,
    },
    {
      x: "02/23/2024 GMT",
      y: 0,
    },
    {
      x: "02/24/2024 GMT",
      y: 0,
    },
    {
      x: "02/25/2024 GMT",
      y: 0,
    },
    {
      x: "02/26/2024 GMT",
      y: 0,
    },
    {
      x: "02/27/2024 GMT",
      y: 0,
    },
    {
      x: "02/28/2024 GMT",
      y: 0,
    },
    {
      x: "02/29/2024 GMT",
      y: 0,
    },
  ],
});
</script>

<template>
  <div>
    <div class="text-center text-xl font-semibold">Collection Chart</div>
    <div class="grid lg:grid-cols-4 gap-4 my-4">
      <LineChart :data="dataLine" class="lg:col-span-2" />
      <BarChart class="lg:col-span-2" />
      <AreaChart :data="dataArea" class="lg:col-span-3" />
      <DonutChart />
      <div
        class="bg-gradient-to-b from-[#80BCBD] to-[#AAD9BB] rounded-xl p-4 flex items-center justify-center"
      >
        <div></div>
      </div>
    </div>
  </div>
</template>
